import pokemon from 'pokemontcgsdk'
pokemon.set.all()
  .then((sets) => {
      console.log(sets[0]) // "Base"
  })