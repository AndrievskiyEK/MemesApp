class Controller {
    constructor() {
      this.model = new Model({
        onTextChange: this.handleModelTextChange,
        onMemeListChanged: this.handleMemeSelectChanged,
        onNewMemeSelected: this.handleNewMemeSelected,
        onMemeChanged: this.handleModelMemeChanged,
      });
      this.view = new View({
        onTextChange: this.handleViewTextChange,
        onMemeListChanged: this.handleMemeSelectChanged,
        onNewMemeSelected: this.handleNewMemeSelected,
      });
      this.api = new API();
    }
  
    init() {
      this.api.fetchMemes().then((memes) => {
        this.model.setMemesList(memes);
      });
    }
  
    handleViewTextChange = (textTop, textBottom) => {
      this.model.addText(textTop, textBottom);
    };
  
    handleModelTextChange = (textTop, textBottom) => {
      this.view.showText(textTop, textBottom);
    };
  
    handleMemeSelectChanged = (memes, isError) => {
      if(isError) {
        throw new Error("Ошибка создания списка мемов");        
      }
      this.view.renderMemesList(memes);
    };
  
    handleNewMemeSelected = (memeID) => {
      this.model.getMemeByID(memeID);
    };
  
    handleModelMemeChanged = (memeURL) => {
      this.view.renderMemeImage(memeURL);
    };
  }
  