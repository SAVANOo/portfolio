function changeContent(sectionId) {
    // Obtém todas as seções de conteúdo
    var sections = document.querySelectorAll('.Section-Content');

    // Remove a classe 'active' de todas as seções
    sections.forEach(function (section) {
        section.classList.remove('active');
    });

    // Adiciona a classe 'active' à seção correspondente ao ID passado como parâmetro
    var selectedSection = document.getElementById(sectionId);
    selectedSection.classList.add('active');

    // Obtém todos os itens de navegação
    var navItems = document.querySelectorAll('.Navigation-Item');

    // Remove a classe 'active' de todos os itens de navegação
    navItems.forEach(function (navItem) {
        navItem.classList.remove('Navigation-Item-Active');
    });

    // Adiciona a classe 'Navigation-Item-Active' ao item de navegação correspondente ao ID passado como parâmetro
    var selectedNavItem = document.getElementById('navigation' + sectionId.charAt(0).toUpperCase() + sectionId.slice(1));
    selectedNavItem.classList.add('Navigation-Item-Active');
}