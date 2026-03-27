# prova_2_Matheus_Lacerda
# Prova para a disciplina de Eletroeletrônica
# ⚡ Calculadora Elétrica

Uma aplicação simples e didática para cálculos elétricos essenciais do dia a dia e estudos de eletrônica básica. Este projeto permite calcular consumo de energia (kWh), custo mensal de eletrodomésticos, além de fornecer ferramentas úteis relacionadas à Lei de Ohm, resistores e unidades elétricas.

---

## 📌 Funcionalidades

### 🔋 Consumo de Energia (kWh)

* Cálculo do consumo energético com base em:

  * Potência do aparelho (W)
  * Tempo de uso diário (horas)
* Resultado em **kWh (quilowatt-hora)**

### 💰 Custo Mensal

* Estimativa do valor da conta mensal:

  * Consumo diário → consumo mensal
  * Tarifa de energia (R$/kWh)

---

### ⚡ Lei de Ohm

* Cálculo automático de:

  * Tensão (V)
  * Corrente (I)
  * Resistência (R)

Fórmula base:

```
V = R × I
```

---

### 🔌 Resistência de Resistores

* Cálculo da resistência a partir de valores inseridos manualmente
* (Opcional) Pode ser expandido para leitura de código de cores

---

### 🔗 Resistores em Série

* Soma direta das resistências:

```
R_total = R1 + R2 + R3 + ...
```

---

### 🔀 Resistores em Paralelo

* Cálculo da resistência equivalente:

```
1 / R_total = 1/R1 + 1/R2 + 1/R3 + ...
```

---

### 📏 Múltiplos e Submúltiplos

* Conversão entre unidades:

  * mili (m) → 10⁻³
  * micro (µ) → 10⁻⁶
  * kilo (k) → 10³
  * mega (M) → 10⁶

Exemplo:

```
1 kΩ = 1000 Ω
```

---

## 🛠️ Tecnologias Utilizadas

* Linguagem: (ex: JavaScript / Python / C++)
* Interface: (ex: HTML/CSS ou CLI)
* Bibliotecas: (se houver)

---

## 🚀 Como Usar

1. Insira os valores solicitados (potência, tempo, tarifa, etc.)
2. Escolha o tipo de cálculo desejado
3. Visualize o resultado instantaneamente

---

## 📊 Exemplo de Uso

**Eletrodoméstico:** 1000W
**Uso diário:** 5 horas
**Tarifa:** R$ 0,75/kWh

**Consumo diário:**

```
1000W × 5h = 5000Wh = 5 kWh
```

**Consumo mensal:**

```
5 × 30 = 150 kWh
```

**Custo mensal:**

```
150 × 0,75 = R$ 112,50
```

---

## 🎯 Objetivo

Este projeto foi desenvolvido com fins educacionais, ajudando estudantes e entusiastas a compreender conceitos fundamentais de eletricidade de forma prática e aplicada.

---

## 📄 Licença

Este projeto está sob a licença MIT. Sinta-se livre para usar, modificar e compartilhar.

---

## 👨‍💻 Autor

Desenvolvido por você 🚀
