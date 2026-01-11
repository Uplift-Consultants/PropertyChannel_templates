export const customStyles = `
  @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@800&display=swap');

  body { margin: 0; padding: 0; background: #f0f0f0; }
  
  .flier-container {
    width: 600px;
    height: 800px;
    background: #1a1a1a;
    color: white;
    font-family: 'Montserrat', sans-serif;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border: 10px solid #ffd700;
    position: relative;
    overflow: hidden;
  }

  .title {
    font-size: 64px;
    text-transform: uppercase;
    color: #ffd700;
    text-align: center;
    margin: 0;
  }

  .description {
    font-size: 20px;
    opacity: 0.8;
    margin-top: 20px;
  }

  .logo {
    position: absolute;
    bottom: 40px;
    width: 100px;
  }
`;

export const getHtml = (data) => `
  <!DOCTYPE html>
  <html>
    <head>
      <style>${customStyles}</style>
    </head>
    <body>
      <div id="capture-target" class="flier-container">
        <h1 class="title">${data.title}</h1>
        <p class="description">${data.description}</p>
        <img src="${data.logoUrl}" class="logo" />
      </div>
    </body>
  </html>
`;