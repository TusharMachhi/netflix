module.exports = {
  mode:'jit',
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  
  
  theme: {
    extend: {

      fontFamily: {
        tajawal: ['Permanent Marker', 'cursive'],
       },
 

      animation:{
        'showDiv': 'showDiv 1s ease-out',
      },
      keyframes:{
        showDiv:{
          'to':{display : 'bloack'}
        }
      },
      
      height:{
        'screen-90':'90vh',
        'screen-95':'95vh',
        'screen-85':'85vh',
        'screen-80':'80vh'
      },
      width:{
        'screen-90':'90vh',
        'screen-95':'95vh',
        'screen-85':'85vh',
        'screen-80':'80vh'
      }
      
      
      
    },
  },
  plugins: [],
}
