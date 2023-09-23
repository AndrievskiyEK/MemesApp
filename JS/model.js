class Model {
    constructor({
      onTextChange,
      onMemeListChanged,
      onNewMemeSelected,
      onMemeChanged,
    }) {
      this.memes = [];
      this.isError = false;
      this.textTop = "";
      this.textBottom = "";
  
      this.onTextChange = onTextChange;
      this.onMemeListChanged = onMemeListChanged;
      this.onNewMemeSelected = onNewMemeSelected;
      this.onMemeChanged = onMemeChanged;
    }
  
    addText(textTop, textBottom) {
      if (!this._isTextContentValid(textTop, textBottom)) {
        this.isError = true;
        return
      }
      this.isError = false;  
      this.textTop = textTop;
      this.textBottom = textBottom;
      this.onTextChange(this.textTop, this.textBottom);
    }
  
    setMemesList = (memes) => {
      if (!memes && !Array.isArray(memes)) {
        this.isError = true;
        console.error("Ошибка: memes должен быть массивом");
        return
      } 
      this.isError = false;
  
      this.memes = memes;

      this.onMemeListChanged(this.memes, this.isError);
    };
  
    getMemeByID = (memeID) => {
      const memesID = this.memes;
  
      let memeURL = null;
  
      memesID.forEach((element) => {
        if (element.id === memeID) {
          memeURL = element.url;
        }  
        return memeURL;
      });
  
      this.onMemeChanged(memeURL);
    };
  
    _isTextContentValid() {
      return this.textTop.length <= 100 && this.textBottom.length <= 100;
    }
  }
  