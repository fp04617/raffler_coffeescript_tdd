describe "Raffler Application Class", -> 
  jasmineRaffler = null
  beforeEach ->
    jasmineRaffler = window.Raffler.init()  
  it "Check if raffler app can be initialized", ->    
    expect(jasmineRaffler.initialize()?).toEqual(true)      
  describe "Raffler Router", ->     
    it "Check if raffler router can be initialized", ->
      expect(jasmineRaffler.router?).toEqual(true)   
  describe "Generate raffler entries collection", ->
    newRaffler = null
    coll = null
    it "can add a person", ->
      coll = new Raffler.Collections.Entries()
      newRaffler = coll.create name: 'test Person'
      expect(coll.length).toEqual(1)
    it "can delete a person", ->
      newRaffler.destroy()
      expect(coll.length).toEqual(0)
  describe "Raffler App View", ->
    addedRaffler = null
    it "can be initialized", ->
      expect(jasmineRaffler.appView?).toEqual(true)   
    it "check if raffler can be added", ->
      rafflerCount = jasmineRaffler.appView.collection.length
      addedRaffler = jasmineRaffler.appView.addPerson('Ram')
      expect(jasmineRaffler.appView.collection.length).toEqual(rafflerCount+1) 
    it "check if raffler can be deleted", ->
      rafflerCount = jasmineRaffler.appView.collection.length
      addedRaffler.destroy()
      expect(jasmineRaffler.appView.collection.length).toEqual(rafflerCount-1)
    it "check if a winner can be selected", ->
      jasmineRaffler.appView.chooseWinner()
      expect(jasmineRaffler.appView.getWinner().length).toEqual(1)
    it "reset the rafflers", ->
      jasmineRaffler.appView.clearEntries()

      
      
      
    
      
    
  
