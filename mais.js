const praticas = {
            milho: [
      "A melhor forma de plantar milho exige um solo rico e bem drenado, com pelo menos 6 horas diárias de sol.",
    "Plante as sementes a uma profundidade de 3cm a 5cm, deixando um espaçamento de 20cm a 30cm entre cada planta, e cerca de 70cm a 90cm.",
    "entre as fileiras. ",
        
        

                "Irrigação eficiente com gotejamento.",
                "Rotação de culturas para melhorar o solo.",
                "Uso de adubação orgânica."
            ],
            soja: [
                "Adicionar matéria orgânica ao solo arenoso.",
                "Adubação orgânica recomendada.",
                "Controle integrado de pragas."
            ],
            trigo: [
                "Irrigação eficiente para solos mistos.",
                "Manejo equilibrado do solo.",
                "Uso consciente de fertilizantes."
            ]
        };

        function recomendar() {
            const cultura = document.getElementById("cultura").value;
            const lista = praticas[cultura];
            const resultado = document.getElementById("resultado");

            resultado.innerHTML = `<h3>Recomendações para ${cultura}:</h3><ul>${lista.map(item => `<li>${item}</li>`).join('')}</ul>`;
        }