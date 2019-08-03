export function fetchCats() {
  const cats = fetch('http://localhost:4000/db').then(response => {
                  return response.json()
                }).then(responseJSON => {
                  return responseJSON.images
                });
  return {
    type: 'FETCH_PETS',
    cats
  };
}

export function loadingCats(){
  return {
    type: 'LOADING_CATS',
    {}
  };
};
