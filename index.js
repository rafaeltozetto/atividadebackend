function mostrarCampos() {
    var forma = document.getElementById("forma").value;
    document.getElementById("camposQuadrado").style.display = (forma === "quadrado") ? "block" : "none";
    document.getElementById("camposRetangulo").style.display = (forma === "retangulo") ? "block" : "none";
    document.getElementById("camposCirculo").style.display = (forma === "circulo") ? "block" : "none";
  }

  function calcularArea() {
    var forma = document.getElementById("forma").value;
    var resultado = document.getElementById("resultado");
    var area;

    switch (forma) {
      case "quadrado":
        var lado = parseFloat(document.getElementById("ladoQuadrado").value);
        area = lado * lado;
        break;
      case "retangulo":
        var base = parseFloat(document.getElementById("baseRetangulo").value);
        var altura = parseFloat(document.getElementById("alturaRetangulo").value);
        area = base * altura;
        break;
      case "circulo":
        var raio = parseFloat(document.getElementById("raioCirculo").value);
        area = Math.PI * raio * raio;
        break;
      default:
        area = "Forma inválida";
    }

    resultado.innerHTML = "Área: " + area.toFixed(2);
  }