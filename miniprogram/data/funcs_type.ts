export interface ExcelFunc {
  name: string
  description: string
}

export interface ExcelFuncCategory {
  name: string
  funcs: ExcelFunc[]
}

export type ExcelFuncWithCategory = ExcelFunc & { category: string }

