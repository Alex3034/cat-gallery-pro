# 🐱 Cat Gallery App

![React](https://img.shields.io/badge/React-18-blue?logo=react)
![Tailwind](https://img.shields.io/badge/TailwindCSS-3-blue?logo=tailwindcss)
![JavaScript](https://img.shields.io/badge/JavaScript-ES6-yellow?logo=javascript)

Aplicación web desarrollada con **React** que muestra una galería infinita de imágenes de gatos consumiendo una API externa.  
Los usuarios pueden explorar imágenes, marcar gatos como favoritos y gestionarlos posteriormente en una sección dedicada.

Este proyecto está enfocado en **arquitectura de componentes, rendimiento y experiencia de usuario**.

---

# 🚀 Demo en vivo

👉 [https://alex3034.github.io/cat-gallery-pro/](https://alex3034.github.io/cat-gallery-pro/)

*(Desplegado con GitHub Pages)*

---

# 📸 Capturas de pantalla

| Vista de escritorio | Vista móvil |
|---------------------|-------------|
| ![Desktop](./assets/home-desktop.png) | ![Mobile](./assets/mobile.png) |

---

# 📑 Índice

- [Características](#características)
- [Tecnologías utilizadas](#tecnologías-utilizadas)
- [Estructura del proyecto](#estructura-del-proyecto)
- [API utilizada](#api-utilizada)
- [Instalación](#instalación)
- [Aprendizajes](#aprendizajes)
- [Mejoras futuras](#mejoras-futuras)
- [Autor](#autor)

---

# ✨ Características

### 🖼️ Galería infinita de gatos
- Obtención de imágenes desde una API externa
- Carga automática al hacer scroll
- Grid responsive adaptado a distintos dispositivos

### ❤️ Sistema de favoritos
- Añadir o eliminar gatos de favoritos
- Gestión del estado global mediante **React Context**
- Persistencia de datos usando **localStorage**

### ⚡ Optimización de rendimiento
- Uso de **React.memo** para evitar renders innecesarios
- Lazy loading en imágenes
- Skeleton loader para mejorar la percepción de carga

### 🎨 Interfaz moderna
- Diseño con **Tailwind CSS**
- Cards con microinteracciones
- Interacciones suaves en hover y click

### ♿ Accesibilidad
- Botones accesibles con `aria-label`
- Mejora de la navegación con lectores de pantalla

---

# 🛠️ Tecnologías utilizadas

| Tecnología | Uso |
|------------|-----|
| React | Librería principal de UI |
| JavaScript (ES6+) | Lógica de la aplicación |
| Tailwind CSS | Estilos |
| Context API | Estado global |
| IntersectionObserver | Infinite Scroll |
| localStorage | Persistencia de favoritos |

---

# 📂 Estructura del proyecto

````
src/
├── components/
│ ├── CatCard.jsx
│ ├── CatGallery.jsx
│ ├── Loader.jsx
│ ├── Navbar.jsx
│ └── icons/
│ └── HeartIcon.jsx
│
├── context/
│ └── FavoritesContext.jsx
│
├── hooks/
│ └── useCats.js
│
├── pages/
│ ├── Home.jsx
│ └── Favorites.jsx
│
├── App.jsx
└── main.jsx
````

# 🌐 API utilizada

Este proyecto utiliza:

**The Cat API**

https://thecatapi.com/

Proporciona imágenes de gatos y datos relacionados con diferentes razas.

---

# 🧠 Aprendizajes

Durante el desarrollo de este proyecto he trabajado en:

- Arquitectura de componentes en React
- Gestión de estado global con **Context API**
- Implementación de **infinite scroll**
- Consumo de APIs externas
- Persistencia de datos con **localStorage**
- Optimización de componentes con **React.memo**
- Mejora de la experiencia de usuario con loaders y microinteracciones

---

# 📈 Mejoras futuras

- Búsqueda de gatos por raza
- Mostrar información adicional de cada raza
- Mejorar accesibilidad con navegación por teclado

---

# 👨‍💻 Autor

Desarrollado por **Alejandro Herrera**

GitHub:  
https://github.com/Alex3034
