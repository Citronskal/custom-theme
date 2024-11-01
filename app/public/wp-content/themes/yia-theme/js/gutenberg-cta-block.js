const { registerBlockType } = wp.blocks; 


registerBlockType('yiablock/custom-cta', {

    //built-in attributes
    title: 'Call to Action',

    description: 'Block to generate a custom CTA',

    icon: 'heart',

    category: 'design',


    //custom attributes

    attribute:{},




    //custom functions

    //built-in functions
    edit(){},

    save(){}

})