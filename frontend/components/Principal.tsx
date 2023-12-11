import React from "react";
import Container from "react-bootstrap/Container";



function Home() {
  return (
      <Container>
        <div className="content-center brand" style={{ textAlign: "center" }}>
          <h1 className="h1-seo">Cafetería</h1>
          <p className="lead" style={{ color: "#ffffff" }}>
            Bienvenido a nuestra cafetería, donde cada sorbo cuenta.
          </p>

          <p className="lead" style={{ color: "#ffffff" }}>
            Descubre una experiencia única de café y deliciosos productos.
          </p>
        </div>
      </Container>
  );
}

export default Home;