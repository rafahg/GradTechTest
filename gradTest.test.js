function createMenuData(data) {
  let splitData = data.map(item => item.split('/'));
  let parent = [];
  let childs = [];
  let dataSolution = [];
   
  splitData.forEach (function(item){
    parent.push(item[0]);
    childs.push(item[1]);
  })
  
  let uniqParent = [...new Set(parent)].sort(); // Eliminates duplicate parents.
  
  function createData(parent) {
 
  let dataList = {};

  dataList.title = parent;
  dataList.data = [];
  
  childs.forEach(function(item){
    if (item.includes(parent)){
      dataList.data.push(item);
    }
  })
    return dataList;
  }
  
  dataSolution = uniqParent.map(createData);
  
  return dataSolution;

}


describe("menu Data Generator", () => {
    
  it("works in the simple case scenario, creating correct data structure", () => {
    const data = ["parent1/parent1child"];

    const expectedResult = [
      {
        title: "parent1",
        data: ["parent1child"]
      }
    ];

    const actualResult = createMenuData(data);
    expect(actualResult).toMatchObject(expectedResult);
  });
  
  
  it("works with one parent 2 childs, creating correct data structure", () => {
    const data = ["parent1/parent1child","parent1/parent1child2"];

    const expectedResult = [
      {
        title: "parent1",
        data: ["parent1child","parent1child2"]
      }
    ];

    const actualResult = createMenuData(data);
    expect(actualResult).toMatchObject(expectedResult);
  });
  
  it("works with 2 parents, 2 childs, creating correct data structure", () => {
    const data = ["parent1/parent1child","parent1/parent1child2","parent2/parent2child","parent2/parent2child2"];

    const expectedResult = [
      {
        title: "parent1",
        data: ["parent1child", "parent1child2"]
      },
      { title: "parent2", data: ["parent2child", "parent2child2"] }
    ];

    const actualResult = createMenuData(data);
    expect(actualResult).toMatchObject(expectedResult);
  });
  
  it("works with 2 parents given in any order, 2 childs, creating correct data structure", () => {
    const data = ["parent2/parent2child","parent1/parent1child2","parent1/parent1child","parent2/parent2child2"];

    const expectedResult = [
      {
        title: "parent1",
        data: ["parent1child", "parent1child2"]
      },
      { title: "parent2", data: ["parent2child", "parent2child2"] }
    ];

    const actualResult = createMenuData(data);
    expect(actualResult).toMatchObject(expectedResult);
  });



  it.skip("creates correct data structure ", () => {
      const data = [
        "parent1/parent1child",
        "parent1/parent1child2",
        "parent2/parent2child",
        "parent2/parent2child2",
        "parent1/parent1child3",
        "parent3",
        "parent3/parent3child1",
        "parent4"
      ];
  
      const expectedResult = [
        {
          title: "parent1",
          data: ["parent1child", "parent1child2", "parent1child3"]
        },
        { title: "parent2", data: ["parent2child", "parent2child2"] },
        { title: "parent3", data: ["parent3child1"] }
      ];
  
      const actualResult = createMenuData(data);
      expect(actualResult).toMatchObject(expectedResult);
    });
  });