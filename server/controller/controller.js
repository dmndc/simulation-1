module.exports = {
  getShelfItems: (req, res, next) => {
    // get the items from specific bin
    const dbInstance = req.app.get('db');
    
    dbInstance.getItems([req.params.id])
      .then( items => res.status(200).send( items ) )
      .catch( () => res.status(500).send() );

  },
  getBin: (req, res, next) => {
    // get the specific bin by ID
    const dbInstance = req.app.get('db');

    const shelf = req.params.id.charAt(0);
    const bin = req.params.id.slice(1)
    
    dbInstance.getBin([shelf, bin])
      .then( item => res.status(200).send( item ) )
      .catch( () => res.status(500).send() );

  },
  createBin: (req, res, next) => {
    // create a new bin object
    const dbInstance = req.app.get('db');
    const { name, price, image_url } = req.body;
    const shelf = req.params.id.charAt(0);
    const bin = req.params.id.slice(1)

    
    console.log(name);
    console.log(price);

    dbInstance.createBin([ name, price, image_url, shelf, bin])
      .then( () => res.status(200).send() )
      .catch( () => res.status(500).send() );

  },
  updateBin: (req, res, next) => {
    const dbInstance = req.app.get('db');
    const { name, price } = req.body

    const shelf = req.params.id.charAt(0);
    const bin = req.params.id.slice(1)

    dbInstance.updateBin([ name, price, shelf, bin ])
      .then( () => res.status(200).send() )
      .catch( () => res.status(500).send() )

  },
  deleteBin: (req, res, next) => {
    // delete a bin object
    const dbInstance = req.app.get('db');

    const shelf = req.params.id.charAt(0);
    const bin = req.params.id.slice(1)

    dbInstance.deleteBin([shelf, bin])
      .then( () => res.status(200).send() )
      .catch( () => res.status(500).send() );


  }
}