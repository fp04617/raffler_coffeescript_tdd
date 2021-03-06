// Generated by CoffeeScript 1.6.3
(function() {
  describe("Raffler Application Class", function() {
    var jasmineRaffler;
    jasmineRaffler = null;
    beforeEach(function() {
      return jasmineRaffler = window.Raffler.init();
    });
    it("Check if raffler app can be initialized", function() {
      return expect(jasmineRaffler.initialize() != null).toEqual(true);
    });
    describe("Raffler Router", function() {
      return it("Check if raffler router can be initialized", function() {
        return expect(jasmineRaffler.router != null).toEqual(true);
      });
    });
    describe("Generate raffler entries collection", function() {
      var coll, newRaffler;
      newRaffler = null;
      coll = null;
      it("can add a person", function() {
        coll = new Raffler.Collections.Entries();
        newRaffler = coll.create({
          name: 'test Person'
        });
        return expect(coll.length).toEqual(1);
      });
      return it("can delete a person", function() {
        newRaffler.destroy();
        return expect(coll.length).toEqual(0);
      });
    });
    return describe("Raffler App View", function() {
      var addedRaffler;
      addedRaffler = null;
      it("can be initialized", function() {
        return expect(jasmineRaffler.appView != null).toEqual(true);
      });
      it("check if raffler can be added", function() {
        var rafflerCount;
        rafflerCount = jasmineRaffler.appView.collection.length;
        addedRaffler = jasmineRaffler.appView.addPerson('Ram');
        return expect(jasmineRaffler.appView.collection.length).toEqual(rafflerCount + 1);
      });
      it("check if raffler can be deleted", function() {
        var rafflerCount;
        rafflerCount = jasmineRaffler.appView.collection.length;
        addedRaffler.destroy();
        return expect(jasmineRaffler.appView.collection.length).toEqual(rafflerCount - 1);
      });
      it("check if a winner can be selected", function() {
        jasmineRaffler.appView.chooseWinner();
        return expect(jasmineRaffler.appView.getWinner().length).toEqual(1);
      });
      return it("reset the rafflers", function() {
        return jasmineRaffler.appView.clearEntries();
      });
    });
  });

}).call(this);
