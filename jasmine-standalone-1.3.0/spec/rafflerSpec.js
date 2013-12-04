// Generated by CoffeeScript 1.6.3
(function() {
  describe("Raffler Class", function() {
    var localRaffler;
    localRaffler = null;
    beforeEach(function() {
      return localRaffler = window.Raffler.init();
    });
    it("can be initialized", function() {
      return expect(localRaffler.initialize() != null).toEqual(true);
    });
    describe("Router", function() {
      return it("can be initialized", function() {
        return expect(localRaffler.router != null).toEqual(true);
      });
    });
    describe("Entries Collection", function() {
      var coll, createdPerson;
      createdPerson = null;
      coll = null;
      it("can add a person", function() {
        coll = new Raffler.Collections.Entries();
        createdPerson = coll.create({
          name: 'test Person'
        });
        return expect(coll.length).toEqual(1);
      });
      return it("can delete a person", function() {
        createdPerson.destroy();
        return expect(coll.length).toEqual(0);
      });
    });
    return describe("App View", function() {
      var personAdded;
      personAdded = null;
      it("can be initialized", function() {
        return expect(localRaffler.appView != null).toEqual(true);
      });
      it("can add a person", function() {
        var currentCount;
        currentCount = localRaffler.appView.collection.length;
        personAdded = localRaffler.appView.addPerson('test person2');
        return expect(localRaffler.appView.collection.length).toEqual(currentCount + 1);
      });
      it("can delete a person", function() {
        var currentCount;
        currentCount = localRaffler.appView.collection.length;
        personAdded.destroy();
        return expect(localRaffler.appView.collection.length).toEqual(currentCount - 1);
      });
      return it("can select a winner", function() {
        localRaffler.appView.chooseWinner();
        return expect(localRaffler.appView.getWinner().length).toEqual(1);
      });
    });
  });

}).call(this);
