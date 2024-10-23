  import React from "react";
  import { Card, Button } from "react-bootstrap";
  import Name from "./Name";
  import Price from "./Price";
  import Description from "./Description";
  import Image from "./Image";
  import { ThemeProvider } from 'react-bootstrap';

  // Prénom de l'utilisateur
  const firstName = "Amadou"; // Changez ceci pour voir la différence

  function App() {
    const cardStyle = {
      width: '20rem',
      margin: '30px auto',
      borderRadius: '20px',
      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
      overflow: 'hidden',
      backgroundColor: '#f0f4c3',
      transition: 'transform 0.3s ease',
    };

    const cardHoverStyle = {
      transform: 'scale(1.05)',
    };

    const buttonStyle = {
      backgroundColor: '#6a1b9a',
      borderColor: '#6a1b9a',
      borderRadius: '30px',
      padding: '10px 20px',
      color: '#fff',
      fontWeight: 'bold',
    };

    const imgStyle = {
      borderRadius: '100%',
      width: '150px',
      height: '150px',
      animation: 'bounce 2s infinite',
    };

    const headingStyle = {
      color: '#6a1b9a',
      textAlign: 'center',
      fontSize: '24px',
      fontWeight: 'bold',
    };

    const messageStyle = {
      fontSize: '20px',
      textAlign: 'center',
      marginTop: '20px',
      color: '#3e2723',
    };

    return (

      <ThemeProvider>
      <div className="App" style={{ backgroundColor: '#e8eaf6', padding: '50px', minHeight: '100vh' }}>
        {/* Carte de produit avec hover */}
        <Card style={cardStyle} className="product-card">
          <Image />
          <Card.Body>
            <Card.Title style={headingStyle}><Name /></Card.Title>
            <Card.Text style={{ color: '#5e35b1' }}>
              <Description />
            </Card.Text>
            <Button variant="primary" style={buttonStyle}>Prix: <Price /></Button>
          </Card.Body>
        </Card>

        {/* Message de salutation */}
        <p style={messageStyle}>
          {firstName ? `Bonjour, ${firstName}!` : 'Bonjour !'}
        </p>

        {/* Afficher une image si le prénom est fourni */}
        {firstName && (
          <div style={{ textAlign: 'center', marginTop: '30px' }}>
            <img 
              src="https://via.placeholder.com/150" 
              alt="Bienvenue"
              style={imgStyle}
            />
          </div>
        )}
      </div>

    </ThemeProvider>
    
  
  );
  
}

  export default App;
