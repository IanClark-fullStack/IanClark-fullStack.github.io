module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      display: ['courier-prime', 'Courier', 'monospace'],
      body: ['Open Sans', 'sans-serif']
    },
    extend: {
      colors: {
        blue: '#291beb',
        bright: '#f36ef5'
      }, 
      backgroundImage: {
        'browser-pattern': "url('/assets/images/browserBrush.png')",
        'muskyTweets-pattern': "url('/assets/images/newNewsStock.jpg')",
        'password-Pattern': "url('/assets/images/passWordGenerator.jpg')",
        'todo-pattern': "url('/assets/images/localStorageTodoList.jpg')",

      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
