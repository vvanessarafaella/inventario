window.onload = () => {
    let introVideo = document.getElementById("intro-video");

    introVideo.onended = function() {
        document.getElementById("intro-screen").style.display = "none";
        document.getElementById("main-content").style.display = "block";
    };
};

// Pular introdução manualmente
function skipIntro() {
    document.getElementById("intro-screen").style.display = "none";
    document.getElementById("main-content").style.display = "block";
}

// Exibir diferentes seções do sistema
function showInventory() {
    document.getElementById("inventory-section").style.display = "block";
    document.getElementById("category-section").style.display = "none";
}

function showCategories() {
    document.getElementById("inventory-section").style.display = "none";
    document.getElementById("category-section").style.display = "block";
}

// Adicionar e Editar Categorias
let categories = [];

function openCategoryModal() {
    document.getElementById("categoryModal").style.display = "block";
}

function saveCategory() {
    let categoryName = document.getElementById("editCategoryName").value;
    let categoryItems = document.getElementById("editCategoryItems").value.split(",");
    let subCategory = document.getElementById("editSubCategory").value;

    let category = { name: categoryName, subcategories: [], items: categoryItems };
    if (subCategory) category.subcategories.push(subCategory);

    categories.push(category);
    loadCategories();
    closeCategoryModal();
}

function closeCategoryModal() {
    document.getElementById("categoryModal").style.display = "none";
}

function loadCategories() {
    let table = document.getElementById("category-table").getElementsByTagName("tbody")[0];
    table.innerHTML = "";
    categories.forEach((cat, index) => {
        let row = table.insertRow();
        row.insertCell(0).innerText = cat.name;
        row.insertCell(1).innerText = cat.subcategories.join(", ");
        row.insertCell(2).innerHTML = `<button onclick="openCategoryModal()">✏️ Editar</button> <button onclick="categories.splice(${index},1); loadCategories()">❌ Excluir</button>`;
    });
}