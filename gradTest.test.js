function createMenuData(data) {

  let splitData = data[0].split("/");
  let dataSolution = [];
  let dataList = {};
  
  dataList.title = splitData[0];
  dataList.data = [];
  dataList.data.push(splitData[1]);
  dataSolution.push(dataList);
  
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