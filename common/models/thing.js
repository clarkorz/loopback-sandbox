module.exports = function(Thing) {

  Thing.stars = function (star) {
    return Thing.find({ where: { star: star } });
  };

  Thing.remoteMethod(
    'stars',
    {
      accepts    : [
        { arg: 'star', type: 'number', required: true, http: { source: 'form' } }
      ],
      returns    : { arg: 'data', type: 'Thing', root: true }
    }
  );
};
