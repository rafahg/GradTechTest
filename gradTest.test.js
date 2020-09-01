function createMenuData(data) {
  const dataSplit = data.map((item) => item.split('/')).sort();

  let formattedData = [
    {
      title: dataSplit[0][0],
      data: [dataSplit[0][1]]
    }
  ];
  for (let i = 1; i < dataSplit.length; i++) {
    const lastDataAdded = formattedData[formattedData.length -1];
    const nextDataToCompare = dataSplit[i];
    if(lastDataAdded.title === nextDataToCompare[0]){
      formattedData[formattedData.length -1].data.push(nextDataToCompare[1]);
    } else {
      formattedData.push({
        title: nextDataToCompare[0],
        data: [nextDataToCompare[1]]
      });
    }
  }
 return formattedData;
}


// Test suite --------- //

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


  it("creates correct data structure ", () => {
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