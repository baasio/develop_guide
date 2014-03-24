module.exports = function(grunt){

	grunt.loadNpmTasks('grunt-contrib-concat');

	grunt.initConfig({

		pkg : grunt.file.readJSON('package.json'),

  		concat : {
			guide :{
					files: {
					'javascript/guide.md': [
					'javascript/overview.md',
					'javascript/io.md'
					]
				},
			}
		},
	});

	grunt.registerTask('default',['concat:guide']);
}