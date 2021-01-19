import Redux from 'redux';

var example = {id: 22345, campus: 'hrnyc', name: 'claire Shoes', slogan: '2021 Susu Limited Edition', description: 'Pleaseeeeee',
  styles: [
    {
      photos: [
        { thumbnail_url: 'https://images.unsplash.com/photo-1517278322228-3fe7a86cf6f0?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80' }
      ]
    }
  ] };

  // var example = {22345: {id: 22345, campus: 'hrnyc', name: 'claire Shoes', slogan: '2021 Susu Limited Edition', description: 'Pleaseeeeee',
  // styles: [
  //   {
  //     photos: [
  //       { thumbnail_url: 'https://images.unsplash.com/photo-1517278322228-3fe7a86cf6f0?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80' }
  //     ]
  //   }
  // ] }};

const yourOutfitListReducer = (state = [example], action) => {
  switch ( action.type ) {
  case 'GET_YOUR_OUTFIT_LIST':
    return action.yourOutfitList;
  default : return state;
  }
};

export default yourOutfitListReducer;
