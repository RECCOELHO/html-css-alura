def jogar():
    perguntas = [
        {"pergunta": "Qual é a capital do Brasil?", "resposta": ["Brasília","brasilia"],},
        {"pergunta": "Quantos estados tem o Brasil?", "resposta": "26"},
        {"pergunta": "Qual é o maior planeta do Sistema Solar?", "resposta": "Júpiter"},
        {"pergunta": "Qual é "}
    ]
    
    pontuacao = 0

    for pergunta in perguntas:
        resposta_usuario = input(pergunta["pergunta"] + " ")
        
        if resposta_usuario.lower() == pergunta["resposta"].lower():
            print("Correto!")
            pontuacao += 1
        else:
            print(f"Errado! A resposta correta é {pergunta['resposta']}.")

    print(f"\nSua pontuação final é: {pontuacao} de {len(perguntas)}.")

if __name__ == "__main__":
    jogar()