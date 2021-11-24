const create_UUID = () => {
  var dt = new Date().getTime();
  var uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(
    /[xy]/g,
    function (c) {
      var r = (dt + Math.random() * 16) % 16 | 0;
      dt = Math.floor(dt / 16);
      return (c == 'x' ? r : (r & 0x3) | 0x8).toString(16);
    }
  );
  return uuid;
};

export const restaurantsData = [
  {
    id: create_UUID(),
    name: 'Ithaa',
    Cuisine: 'Asian',
    Dietary: 'Non-Veg',
    Rating: 4,
    image:
      'https://upload.wikimedia.org/wikipedia/commons/6/62/Barbieri_-_ViaSophia25668.jpg',
  },
  {
    id: create_UUID(),
    name: 'Day Cafe',
    Cuisine: 'Asian',
    Dietary: 'Non-Veg',
    Rating: 3.8,
    image: 'https://i.ndtvimg.com/i/2015-10/restaurant_625x350_41444894654.jpg',
  },
  {
    id: create_UUID(),
    name: 'Kinderkookafe',
    Cuisine: 'Asian',
    Dietary: 'Veg',
    Rating: 4.4,
    image:
      'https://img.etimg.com/thumb/width-1200,height-900,imgsize-829462,resizemode-1,msid-82666514/industry/services/hotels-/-restaurants/staggered-lockdowns-start-to-bite-battered-restaurants.jpg',
  },
  {
    id: create_UUID(),
    name: 'Ginger Bar',
    Cuisine: 'Asian',
    Dietary: 'Veg',
    Rating: 4.9,
    image: 'https://miro.medium.com/max/11192/0*da7aKNrewcGK1osR',
  },
  {
    id: create_UUID(),
    name: 'Steam Plant',
    Cuisine: 'Asian',
    Dietary: 'Vegan',
    Rating: 4.4,
    image:
      'https://img.traveltriangle.com/blog/wp-content/uploads/2017/10/Toit1.jpg',
  },
  {
    id: create_UUID(),
    name: 'Zingara Cucina',
    Cuisine: 'Asian',
    Dietary: 'Vegan',
    Rating: 2.5,
    image:
      'https://img.traveltriangle.com/blog/wp-content/tr:w-700,h-400/uploads/2018/04/shikari.jpg',
  },
  {
    id: create_UUID(),
    name: 'Dinner in the Sky',
    Cuisine: 'Indian',
    Dietary: 'Veg',
    Rating: 4.2,
    image:
      'http://cdn.cnn.com/cnnnext/dam/assets/200120161356-cnn-worlds-best-new-restaurants---madera---simon-brown-photography-1-1.jpg',
  },
  {
    id: create_UUID(),
    name: 'Desi Dhabba',
    Cuisine: 'Indian',
    Dietary: 'Non-Veg',
    Rating: 4.6,
    image:
      'https://www.sundayguardianlive.com/wp-content/uploads/2020/07/3-Dib-restaurant-losses-edited.jpg',
  },
  {
    id: create_UUID(),
    name: 'The Vegan Restaurant',
    Cuisine: 'Indian',
    Dietary: 'Vegan',
    Rating: 3.9,
    image:
      'https://www.theworlds50best.com/filestore/jpg/W50BR2021-150-Noma-2.jpg',
  },
  {
    id: create_UUID(),
    name: 'Parallax Restaurant',
    Cuisine: 'American',
    Dietary: 'Vegan',
    Rating: 3.5,
    image: 'https://static.toiimg.com/photo/51076300.cms',
  },
  {
    id: create_UUID(),
    name: 'Homewood Green Restaurant',
    Cuisine: 'American',
    Dietary: 'Veg',
    Rating: 3.8,
    image:
      'https://images.pexels.com/photos/1581384/pexels-photo-1581384.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
  },
  {
    id: create_UUID(),
    name: 'the Five Fishermen',
    Cuisine: 'American',
    Dietary: 'Non-Veg',
    Rating: 3.3,
    image:
      'https://im1.dineout.co.in/images/uploads/restaurant/sharpen/2/u/y/p20941-15700828565d959028e9f28.jpg?tr=tr:n-medium',
  },
  {
    id: create_UUID(),
    name: 'El Diablo “The Devil”',
    Cuisine: 'Spanish',
    Dietary: 'Non-Veg',
    Rating: 4.6,
    image:
      'https://www.elitetraveler.com/wp-content/uploads/2007/02/Alain-Ducasse-scaled.jpg',
  },
  {
    id: create_UUID(),
    name: 'The Beach Resort',
    Cuisine: 'Spanish',
    Dietary: 'Veg',
    Rating: 4.1,
    image:
      'https://img.etimg.com/thumb/msid-74723587,width-650,imgsize-245027,,resizemode-4,quality-100/talli-turmeric-fb.jpg',
  },
  {
    id: create_UUID(),
    name: 'Pure Vegan Restaurant',
    Cuisine: 'Spanish',
    Dietary: 'Vegan',
    Rating: 4.7,
    image:
      'https://lh3.googleusercontent.com/proxy/_C16qTB4tS-5zGFdXXt4NmHbI1jlshmaiTdIQPF7Mlfa1Qiy9FOS975qLcdhYl-O5OuyF3hlTQzihG8v-4ioUwjMByu_ZEsGV3V3cn2A6GDTMLd5UfszdBBs1-t0342ZJDbQYGol6dRkOvbY33MqrF__5inGFk09O-FO61qrxT9PuSJGHtDAv98o',
  },
  {
    id: create_UUID(),
    name: 'Sur un Arbre Perché',
    Cuisine: 'Italian',
    Dietary: 'Veg',
    Rating: 3.8,
    image:
      'https://www.tripsavvy.com/thmb/oRAIGsQ55Bp-5fcvmUeC0sVPrQQ=/1333x1000/smart/filters:no_upscale()/26-5adafa56c6733500373c3cf5.jpg',
  },
  {
    id: create_UUID(),
    name: 'Chill Out',
    Cuisine: 'Italian',
    Dietary: 'Non-Veg',
    Rating: 2.9,
    image:
      'https://assets.cntraveller.in/photos/614071700adc3d1e95c7adbd/master/pass/outdoor-dining-pune-daily-all-day.jpg',
  },
  {
    id: create_UUID(),
    name: 'Super Club',
    Cuisine: 'Italian',
    Dietary: 'Vegan',
    Rating: 3.9,
    image:
      'https://im1.dineout.co.in/images/uploads/restaurant/sharpen/7/s/v/p73265-15776215315e08981bb0c73.jpg?tr=tr:n-medium',
  },
  {
    id: create_UUID(),
    name: 'Norma Kitchen',
    Cuisine: 'Asian',
    Dietary: 'Vegan',
    Rating: 4.4,
    image:
      'https://webgrowhub.com/wp-content/uploads/2020/12/photo-1552566626-52f8b828add9.jpg',
  },
  {
    id: create_UUID(),
    name: 'The Disaster Cafe',
    Cuisine: 'Mexican',
    Dietary: 'Non-Veg',
    Rating: 4.8,
    image:
      'https://media.istockphoto.com/photos/empty-restaurant-interior-picture-id1290237592?b=1&k=20&m=1290237592&s=170667a&w=0&h=fgXWrrQ7qWpbiO8O_dpEVlS4JsTZYH8e3FoZ4UeoQH8=',
  },
  {
    id: create_UUID(),
    name: 'Nothing',
    Cuisine: 'Mexican',
    Dietary: 'Veg',
    Rating: 2.6,
    image: 'https://images.financialexpress.com/2018/08/gst-eatery.jpg',
  },
  {
    id: create_UUID(),
    name: 'Villa Escudero',
    Cuisine: 'Mexican',
    Dietary: 'Vegan',
    Rating: 4.2,
    image:
      'https://media.cntraveler.com/photos/5d76c2de7ffc50000818c755/master/pass/Aba_JEFF-MARINI_2019_Aba_InteriorWide_creditJeffMarini.jpg',
  },
  {
    id: create_UUID(),
    name: 'Devil Island Prison Restaurant',
    Cuisine: 'Chinese',
    Dietary: 'Non-Veg',
    Rating: 2.9,
    image: 'https://www.your-space.in/wp-content/uploads/2020/10/oiya.jpg',
  },
  {
    id: create_UUID(),
    name: 'The Lockheart',
    Cuisine: 'Chinese',
    Dietary: 'Veg',
    Rating: 3.4,
    image:
      'https://www.thelalit.com/wp-content/uploads/2019/01/24-7-1000-750-400x300.jpg',
  },
  {
    id: create_UUID(),
    name: 'Beetle House',
    Cuisine: 'Chinese',
    Dietary: 'Vegan',
    Rating: 3,
    image:
      'https://media-exp1.licdn.com/dms/image/C561BAQGZqA8gJ2Edpg/company-background_10000/0/1614011974707?e=2159024400&v=beta&t=LMVAHLMDb9k1bPnUbhAfgDAbbwCagwvNnahVrvS7vkg',
  },
  {
    id: create_UUID(),
    name: 'Ninja Dining',
    Cuisine: 'Caribbean',
    Dietary: 'Non-Veg',
    Rating: 4,
    image:
      'https://www.multispice.co.in/resources/Multispice-Manali/images/background/thumbnails/restaurant.jpg',
  },
  {
    id: create_UUID(),
    name: 'Terry Bison Ranch',
    Cuisine: 'Caribbean',
    Dietary: 'Veg',
    Rating: 3.9,
    image: 'https://images.indianexpress.com/2020/09/restuarant.jpg',
  },
  {
    id: create_UUID(),
    name: 'Meow Cat Cafe',
    Cuisine: 'Caribbean',
    Dietary: 'Vegan',
    Rating: 4.3,
    image:
      'https://d4t7t8y8xqo0t.cloudfront.net/resized/750X436/eazytrendz%2F3159%2Ftrend20210616091009.jpg',
  },
  {
    id: create_UUID(),
    name: 'O NOIR',
    Cuisine: 'German',
    Dietary: 'Vegan',
    Rating: 4.2,
    image:
      'https://assets.cntraveller.in/photos/6182a42236c22389b7a54bf8/master/pass/New%20BLR%20Res.%20lead%20Image.jpg',
  },
  {
    id: create_UUID(),
    name: 'Four Seasons Resort',
    Cuisine: 'German',
    Dietary: 'Veg',
    Rating: 4.6,
    image:
      'https://res.cloudinary.com/purnesh/image/upload/w_540,f_auto,q_auto:eco,c_limit/11608793162373.jpg',
  },
  {
    id: create_UUID(),
    name: 'Pay As You Please',
    Cuisine: 'German',
    Dietary: 'Non-Veg',
    Rating: 4.9,
    image:
      'https://media-cdn.tripadvisor.com/media/photo-s/1c/1b/f3/f8/the-oak.jpg',
  },
  {
    id: create_UUID(),
    name: 'Aurum',
    Cuisine: 'Korean',
    Dietary: 'Non-Veg',
    Rating: 4.3,
    image:
      'https://i0.wp.com/stanzaliving.wpcomstaging.com/wp-content/uploads/2021/07/pune-restaurants.jpg?fit=1000%2C667&ssl=1',
  },
  {
    id: create_UUID(),
    name: 'Post Office Pies',
    Cuisine: 'Korean',
    Dietary: 'Veg',
    Rating: 4,
    image:
      'https://d4t7t8y8xqo0t.cloudfront.net/resized/750X436/eazytrendz%2F3158%2Ftrend20210615090914.jpg',
  },
  {
    id: create_UUID(),
    name: 'Porridge Cafe',
    Cuisine: 'Korean',
    Dietary: 'Vegan',
    Rating: 3.7,
    image:
      'https://static.dezeen.com/uploads/2021/10/sereneco-restaurant_greenpoint-brooklyn_carpenter-mason_dezeen_sq1-411x411.jpg',
  },
  {
    id: create_UUID(),
    name: 'Rogo Cafe',
    Cuisine: 'Vietnamese',
    Dietary: 'Veg',
    Rating: 3.9,
    image:
      'https://images.pexels.com/photos/6267/menu-restaurant-vintage-table.jpg?auto=compress&cs=tinysrgb&dpr=1&w=400',
  },
  {
    id: create_UUID(),
    name: 'Safe House',
    Cuisine: 'Vietnamese',
    Dietary: 'Vegan',
    Rating: 3.4,
    image:
      'https://im1.dineout.co.in/images/uploads/restaurant/sharpen/9/z/a/p94145-162696002260f9709697f7e.jpg?tr=tr:n-medium',
  },
  {
    id: create_UUID(),
    name: 'Barbie Cafe',
    Cuisine: 'Vietnamese',
    Dietary: 'Non-Veg',
    Rating: 4.5,
    image:
      'https://imgmedia.lbb.in/media/2019/04/5cb58f31d6bcc905570dd2f1_1555402545798.jpg',
  },
  {
    id: create_UUID(),
    name: 'Burj Khalifa Restaurant',
    Cuisine: 'Arab',
    Dietary: 'Non-Veg',
    Rating: 4.8,
    image:
      'https://img.traveltriangle.com/blog/wp-content/tr:w-700,h-400/uploads/2018/04/shikari.jpg',
  },
  {
    id: create_UUID(),
    name: 'Princess Heart',
    Cuisine: 'Arab',
    Dietary: 'Veg',
    Rating: 4.6,
    image: 'https://miro.medium.com/max/11192/0*da7aKNrewcGK1osR',
  },
  {
    id: create_UUID(),
    name: 'Circus',
    Cuisine: 'Arab',
    Dietary: 'Vegan',
    Rating: 3.8,
    image: 'https://i.ndtvimg.com/i/2015-10/restaurant_625x350_41444894654.jpg',
  },
];
