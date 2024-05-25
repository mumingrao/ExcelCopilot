import { ExcelFuncCategory } from './funcs_type';
//import _ from 'lodash';

export const excelFuncsByCategory: ExcelFuncCategory[] = [
  {
    name: "财务函数",
    funcs: [
      {
        name: "ACCRINT",
        description: "返回定期付息证券的应计利息."
      }
    ]
  },
  {
    name: "逻辑函数",
    funcs: [
      {
        name: "AND",
        description: "返回逻辑值:如果所有参数均为\"真(TRUE)\",返回\"真(TRUE)\",反之返回\"假(FALSE)\"."
      }
    ]
  },
  {
    name: "文本函数",
    funcs: []
  },
  {
    name: "日期和时间函数",
    funcs: []
  },
  {
    name: "查找和引用函数",
    funcs: []
  },
  {
    name: "数学和三角函数",
    funcs: []
  },
  {
    name: "统计函数",
    funcs: []
  },
  {
    name: "工程函数",
    funcs: []
  },
  {
    name: "多维数据集函数",
    funcs: []
  },
  {
    name: "信息函数",
    funcs: []
  },
  {
    name: "兼容性函数",
    funcs: []
  },
  {
    name: "Web函数",
    funcs: []
  }
];

export const excelFuncs = excelFuncsByCategory.flatMap((funcs) => funcs);
export const excelFuncsWithCategory = excelFuncsByCategory.flatMap(({ funcs, name}) =>
  funcs.map(func => ({ category: name, ...func })),
);

