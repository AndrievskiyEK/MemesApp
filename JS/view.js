class View {
    constructor({ onTextChange, onMemeListChanged, onNewMemeSelected }) {
      this.selectNode = document.getElementById("select");
      this.inputTextTopNode = document.getElementById("inputTextTop");
      this.inputTextBottomNode = document.getElementById("inputTextBottom");
  
      this.imageNode = document.getElementById("memImg");
      this.memTextTopNode = document.getElementById("memTextTop");
      this.memTextBottomNode = document.getElementById("memTextbottom");

      this.redColorRangeNode = document.getElementById("redColorRange");
      this.greenColorRangeNode = document.getElementById("greenColorRange");
      this.blueColorRangeNode = document.getElementById("blueColorRange");
      
      //this.redColorRangeToNode = document.querySelector(".webkitaaa::-webkit-slider-runnable-track");
      //this.greenColorRangeToNode = document.getElementById("greenColorRange");
      //this.blueColorRangeToNode = document.getElementById("blueColorRange");     
      
  
      this.onTextChange = onTextChange;
      this.onNewMemeSelected = onNewMemeSelected;
      this.onMemeListChanged = onMemeListChanged;
  
      this.selectNode.addEventListener("change", this._handleSelect);
      this.inputTextTopNode.addEventListener("input", () =>
        this._handleInputText()
      );
      this.inputTextBottomNode.addEventListener("input", () =>
        this._handleInputText()
      );
      this.redColorRangeNode.addEventListener("input",this._changeColorMemText);
      this.greenColorRangeNode.addEventListener("input",this._changeColorMemText);
      this.blueColorRangeNode.addEventListener("input",this._changeColorMemText);
    }
  
    _handleInputText() {
      const textTop = this.inputTextTopNode.value;
      const textBottom = this.inputTextBottomNode.value;
  
      this.onTextChange(textTop, textBottom);
    }
  
    showText = (textTop, textBottom) => {
      this.memTextTopNode.textContent = textTop;
      this.memTextBottomNode.textContent = textBottom;
    };
  
    _handleSelect = () => {
      const memeID = this.selectNode.value;
  
      this.onNewMemeSelected(memeID);
    };
  
    renderMemesList = (memes) => {
      this.selectNode.innerHTML = "";
  
      memes.forEach((meme) => {
        const option = document.createElement("option");
        option.value = meme.id;
        option.textContent = meme.name;
        this.selectNode.appendChild(option);
      });
    };
  
    renderMemeImage = (memeURL) => {
      this.imageNode.setAttribute("src", `${memeURL}`);
    };

    _changeColorMemText = () => {
      const redValue = this.redColorRangeNode.value;
      const greenValue = this.greenColorRangeNode.value;
      const blueValue = this.blueColorRangeNode.value;

      const colorText = "rgb(" + redValue + "," + greenValue + "," + blueValue + ")";   
      //const colorTextRed = "rgb(" + redValue + "," + 0 + "," + 0 + ")";  
      //console.log(redColorRangeToNode);
      this.memTextTopNode.style.color = colorText;
      this.memTextBottomNode.style.color = colorText;
      
      //this.redColorRangeToNode.style.background = colorTextRed;       
    }
  }