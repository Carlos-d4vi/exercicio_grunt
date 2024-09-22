module.exports = function(grunt) {
grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    // Configuração do LESS
    less: {
    development: {
        options: {
        compress: true,
        },
        files: {
        'dist/style.css': 'src/style.less'
        }
    }
    }
});

// Carregando os plugins necessários
grunt.loadNpmTasks('grunt-contrib-less');

// Tarefa padrão
grunt.registerTask('default', ['less']);
};  