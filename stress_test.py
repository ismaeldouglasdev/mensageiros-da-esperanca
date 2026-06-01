import requests
import json
import random
import time

# Configurações do Firebase (extraídas do projeto)
PROJECT_ID = "mensageiros-da-esperanca-c9d6e"
BASE_URL = f"https://firestore.googleapis.com/v1/projects/{PROJECT_ID}/databases/(default)/documents"

def insert_participant(name, contact, curso_id):
    url = f"{BASE_URL}/participantes"
    data = {
        "fields": {
            "nome": {"stringValue": name},
            "contato": {"stringValue": contact},
            "cursoId": {"stringValue": curso_id},
            "dataInscricao": {"timestampValue": "2026-05-08T12:00:00Z"}
        }
    }
    response = requests.post(url, json=data)
    return response.status_code == 200

def run_stress_test(count=200):
    print(f"🚀 Iniciando Stress Test: Inserindo {count} registros...")
    
    # Lista de nomes e cursos para simulação
    nomes = ["João", "Maria", "José", "Ana", "Carlos", "Beatriz", "Pedro", "Paula", "Lucas", "Mariana"]
    sobrenomes = ["Silva", "Santos", "Oliveira", "Souza", "Pereira", "Lima", "Ferreira", "Costa", "Rodrigues", "Almeida"]
    
    # IDs de cursos comuns (substitua por IDs reais se necessário, ou use strings genéricas)
    cursos = ["oficina_musica", "informatica_basica", "artesanato", "reforco_escolar"]
    
    success = 0
    start_time = time.time()
    
    for i in range(count):
        nome_completo = f"{random.choice(nomes)} {random.choice(sobrenomes)} {i}"
        contato = f"({random.randint(11, 99)}) 9{random.randint(1000, 9999)}-{random.randint(1000, 9999)}"
        curso = random.choice(cursos)
        
        if insert_participant(nome_completo, contato, curso):
            success += 1
        
        if (i + 1) % 50 == 0:
            print(f"✅ {i + 1} registros processados...")

    end_time = time.time()
    duration = end_time - start_time
    
    print("\n--- RESULTADO DO STRESS TEST ---")
    print(f"Total solicitado: {count}")
    print(f"Sucesso: {success}")
    print(f"Falhas: {count - success}")
    print(f"Tempo total: {duration:.2f} segundos")
    print(f"Média: {duration/count:.2f}s por registro")
    print("--------------------------------\n")

if __name__ == "__main__":
    # Executamos o teste (limite de 200 para não estourar cota gratuita bruscamente)
    run_stress_test(200)
