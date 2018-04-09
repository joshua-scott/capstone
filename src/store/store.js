import Vue from 'vue'
import Vuex from 'vuex'
import Prismic from 'prismic-javascript'
import PrismicDOM from 'prismic-dom'

Vue.use(Vuex)

// eslint-disable-next-line
/* eslint-disable */
const dev = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
  strict: process.env.NODE_ENV !== 'production',
  // State is where all the data is stored
  state: {
    language: 'fi',
    aboutPages: {},
    products: [],
    categories: [],
    subCategories: [],
    carouselItems: [],
    homePages: []
  },
  // Actions main job is to get data from somewhere else
  // and then commit the mutations defined below
  actions: {
    async getAboutPage ({ commit }) {
      try {
        const api = await Prismic.getApi('https://reno.prismic.io/api/v2')
        const response = await api.query(
          Prismic.Predicates.at('document.type', 'about-page'),
          { lang: '*' }
        )

        let aboutPages = {}
        response.results.forEach(page => {
          const lang = page.lang
          aboutPages[lang] = {}
          aboutPages[lang].title = PrismicDOM.RichText.asHtml(page.data.about_title)
          aboutPages[lang].description = PrismicDOM.RichText.asHtml(page.data.about_description)
          aboutPages[lang].contactInfo = PrismicDOM.RichText.asHtml(page.data.sales_billing_contact_info)
          aboutPages[lang].manufacturerList = PrismicDOM.RichText.asHtml(page.data.manufacturer_list)
        })

        commit('setAboutPages', aboutPages)
      } catch (err) {
        console.warn('Error on getAboutPages action', err)
      }
    },

    async getProducts ({ commit }) {
      try {
        const api = await Prismic.getApi('https://reno.prismic.io/api/v2')
        const response = await api.query(
          Prismic.Predicates.at('document.type', 'product'),
          { lang: '*', pageSize: 100 }
        )
        var data = response.results
        if (response.total_pages != 1) {
          for (var i=2; i <= response.total_pages; i++) {
            var colResponse = await api.query(
              Prismic.Predicates.at('document.type', 'product'),
              { lang: '*', pageSize: 100, page: i }
            )
            data = data.concat(colResponse.results)
          }
        }

        let products = []

        data.forEach(obj => {
          let product = {}
          const p = obj.data
          product.language = obj.lang
          product.name = p.product_name[0].text
          product.number = p.product_number
          product.description = PrismicDOM.RichText.asHtml(p.product_description)
          product.image = p.repeatable_picture_field[0].picture_1.url

          if (p.product_documents[0].repeatable_product_documents.name) {
            product.documents = p.product_documents.map(item => {
              return { ...item.repeatable_product_documents }
            });
          }

          if (p['sub-category'].id) {
            product.subCategory = p['sub-category'].id
            product.subCategorySlug = p['sub-category'].slug.replace('--', '-')
            // console.log(`"${product.language} ${product.name}"'s subcategory: ${product.subCategorySlug}`)
          } else {
            // console.log(`"${product.language} ${product.name}" HAS NO SUBCATEGORY :(`)
          }

          product.representative = p.product_representative
          product.salesUnit = p.sales_unit

          products.push(product)
        })

        commit('setProducts', products)
      } catch (err) {
        console.warn('Error on getProducts action', err)
      }
    },

    // gets all category type documents
    async getCategories ({ commit }) {
      try {
        let api = await Prismic.getApi('https://reno.prismic.io/api/v2')
        await api.query(
          Prismic.Predicates.at('document.type', 'category'),
          { lang: '*', pageSize: 100 }
        ).then(function (response) {

          let data = response.results
          let categories = []

          data.forEach(obj => {
            let category = {}
            let c = obj.data
            if (c.logo.url != undefined) {
              category.image = c.logo.url
            }
            else {
              category.image = "http://www.pngmart.com/files/2/Black-Panther-Logo-Transparent-Background.png"
            }
            category.language = obj.lang
            category.name = c.name[0].text
            category.description = c.description
            categories.push(category)
          })
          commit('setCategories', categories)
        })
      } catch (err) {
        console.warn('Error on getCategories action', err)
      }
    },

    // gets all sub-category type documents
    async getSubCategories ({ commit }) {
      try {
        let api = await Prismic.getApi('https://reno.prismic.io/api/v2')
        await api.query(
          Prismic.Predicates.at('document.type', 'sub-category'),
          { lang: '*', pageSize: 100 }
        ).then(function (response) {
          let data = response.results
          let subCategories = []

          data.forEach(obj => {
            let subCategory = {}
            const s = obj.data
            subCategory.language = obj.lang
            subCategory.name = s.name[0].text
            subCategory.category = s.category.slug
            subCategory.description = s.description

            subCategories.push(subCategory)
          })
          commit('setSubCategories', subCategories)
        })
      } catch (err) {
        console.warn('Error on getSubCategories action', err)
      }
    },

    async getCarousel ({ commit }) {
      try {
        const api = await Prismic.getApi('https://reno.prismic.io/api/v2')
        const response = await api.query(
          Prismic.Predicates.at('document.type', 'homepage_carousel'),
          { pageSize: 100 }
        )
        const data = response.results

        let carouselItems = []

        data.forEach(obj => {
          const i = obj.data

          // English
          let slideEng = {}
          slideEng.language = 'en-gb'
          slideEng.imageUrl = i.image.url
          slideEng.heading = i.heading__english_[0].text
          slideEng.description = i.description__english_[0].text
          carouselItems.push(slideEng)

          // Finnish
          let slideFin = {}
          slideFin.language = 'fi'
          slideFin.imageUrl = i.image.url
          slideFin.heading = i.heading__finnish_[0].text
          slideFin.description = i.description__finnish_[0].text
          carouselItems.push(slideFin)
        })

        commit('setCarousel', carouselItems)
      } catch (err) {
        console.warn('Error on getCarousel action', err)
      }
    },

    // get homepage data
    async getHomePage ({ commit }) {
      try {
        const api = await Prismic.getApi('https://reno.prismic.io/api/v2')
        const response = await api.query(
          Prismic.Predicates.at('document.type', 'homepage'),
          { pageSize: 100 }
        )
        const data = response.results
        // console.log('homepage:', data);

        let homePage = []
        data.forEach(page => {
          const lang = page.lang
          const data = page.data

          //English
          let englishData = {}
          englishData.language = 'en-gb'
          englishData.section1_heading = data.homepage_section_1_heading_en[0].text
          englishData.section1_text = data.homepage_section_1_text_en[0].text
          englishData.section2_heading = data.homepage_section_2_heading_en[0].text
          englishData.section2_text = data.homepage_section_2_text_en[0].text
          englishData.section3_heading = data.homepage_section_3_heading_en[0].text
          englishData.section3_text = data.homepage_section_3_text_en[0].text

          homePage.push(englishData)

          //Finnish
          let finnishData = {}
          finnishData.language = 'fi'
          finnishData.section1_heading = data.homepage_section_1_heading_fi[0].text
          finnishData.section1_text = data.homepage_section_1_text_fi[0].text
          finnishData.section2_heading = data.homepage_section_2_heading_fi[0].text
          finnishData.section2_text = data.homepage_section_2_text_fi[0].text
          finnishData.section3_heading = data.homepage_section_heading_3_fi[0].text
          finnishData.section3_text = data.homepage_section_3_text_fi[0].text

          homePage.push(finnishData)
        })
        commit('setHomePage', homePage)
      } catch (err) {
        console.warn('Error on getHomePage action', err)
      }
    }
  },
  // Mutations are the only place we actually alter the state
  mutations: {
    setLanguage (state, newLanguage) {
      state.language = newLanguage
      console.info(`Language changed to ${newLanguage}`)
    },
    setAboutPages (state, data) {
      state.aboutPages = data
    },
    setProducts (state, data) {
      state.products = data
    },
    setCarousel (state, data) {
      state.carouselItems = data
    },
    setCategories (state, data) {
      state.categories = data
    },
    setSubCategories (state, data) {
      state.subCategories = data
    },
    setHomePage (state, data) {
      state.homePages = data
    }
  }
})
