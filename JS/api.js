class API {
    constructor() {
      this.baseURL = "https://api.imgflip.com";
    }
    fetchMemes = async () => {
      const response = await fetch(`${this.baseURL}/get_memes`);
  
      if (!response.ok) {
        throw new Error("Ошибка при получении данных от API");
      }
  
      const data = await response.json();
  
      return data.data.memes;
    };   
  }
