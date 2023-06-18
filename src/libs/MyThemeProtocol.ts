interface MyThemeProtocol {
    language: string,
    home: {
      header: { 
        form: {
          styles: {
            border: string,
          },
          resetInputLabel: string,
        },
        notificationBtnTitle: string,
        ModalDisplay: string,
      }
    }
  };

  const globalThemeforJSON = {
    "--padding-box": "16px"
  }

export default MyThemeProtocol