'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
    await queryInterface.bulkInsert('Insects', [
      {
        name: 'Western Pygmy Blue Butterfly',
        description: 'Though they appear ornate and delicate, prehistoric fossils suggests that butterflies have been around for more than 200 million years.',
        fact: 'The smallest member of the butterfly family is thought to be the pygmy blue butterfly (Brephidium exilis). ',
        millimeters: 12.0
      },
      {
        name: 'Patu Digua Spider',
        description: 'Most of the spiders found around American homes are more helpful than harmful. This includes the smallest spider, the patu digua.',
        fact: 'The patu digua lives around the Rio Digua river near the El Queremal, Valle del Cauca region of northern Colombia.',
        millimeters: 0.3
      },
      {
        name: 'Scarlet Dwarf Dragonfly',
        description: 'Among insects, dragonflies are among the largest flying bugs. In fact, the dragonfly’s prehistoric ancestor Meganeura was one of the largest insects ever known with a wingspan that exceeded 70 centimeters.',
        fact: 'On the extremely small end, the tinniest dragonfly is the scarlet dwarf (Nannophya pygmaea).',
        millimeters: 20
      },
      {
        name: 'Midget Moths',
        description: 'While butterflies are usually associated with the warmth of daytime, moths tend to take flight in the evenings. ',
        fact: 'The smallest moths come from the Nepticulidae family and are referred to as pigmy moths or midget moths.',
        millimeters: 25
      },
    ])
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('Insects', null, {});
  }
};
