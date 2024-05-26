import { ExcelFunc, ExcelFuncCategory } from './funcs_type';
//import _ from 'lodash';

export const excelFuncsByCategory: ExcelFuncCategory[] = [
  {
    name: "财务函数",
    funcs: [
      {
        name: "ACCRINT",
        description: "返回定期付息证券的应计利息."
      },
      {
        name: "ACCRINTM",
        description: "返回在到期日支付利息的有价证券的应计利息."
      },
      {
        name: "AMORDEGRC",
        description: "返回每个结算期间的折旧值."
      },
      {
        name: "AMORLINC",
        description: "返回每个结算期间的折旧值."
      },
      {
        name: "COUPDAYBS",
        description: "返回从付息期开始到结算日的天数."
      },
      {
        name: "COUPDAYS",
        description: "返回结算日所在的付息期的天数."
      },
      {
        name: "COUPDAYSNC",
        description: "返回从结算日到下一票息支付日之间的天数."
      },
      {
        name: "COUPNCD",
        description: "返回一个表示在结算日之后下一个付息日的数字."
      },
      {
        name: "COUPNUM",
        description: "返回在结算日和到期日之间的付息次数,向上舍入到最近的整数."
      },
      {
        name: "COUPPCD",
        description: "返回表示结算日之前的上一个付息日的数字."
      },
      {
        name: "CUMIPMT",
        description: "返回一笔贷款在给定的start_period到end_period期间累计偿还的利息数额."
      },
      {
        name: "CUMPRINC",
        description: "返回一笔贷款在给定的start_period到end_period期间累计偿还的本金数额."
      },
      {
        name: "DB",
        description: "使用固定余额递减法,计算一笔资产在给定期间内的折旧值."
      },
      {
        name: "DDB",
        description: "用双倍余额递减法或者其他指定方法,返回指定期间内某项固定资产的折旧值."
      },
      {
        name: "DISC",
        description: "返回有价证券的贴现率."
      },
      {
        name: "DOLLARDE",
        description: "将以整数部分和分数部分表示的价格转换为以小数部分表示的价格."
      },
      {
        name: "DOLLARFR",
        description: "将小数转换为分数表示的金额数字."
      },
      {
        name: "DURATION",
        description: "返回假设面值¥100的定期付息有价证券的修正期限."
      },
      {
        name: "EFFECT",
        description: "利用给定的名义年利率和每年的复利期数,计算有效的年利率."
      },
      {
        name: "FV",
        description: "基于固定利率和等额分期付款方式,返回某项投资的未来值."
      },
      {
        name: "FVSCHEDULE",
        description: "返回应用一系列复利率计算的初始本金的未来值."
      },
      {
        name: "INTRATE",
        description: "返回完全投资型证券的利率."
      },
      {
        name: "IPMT",
        description: "基于固定利率及等额分期付款方式,返回给定期数内对投资的利息偿还额."
      },
      {
        name: "IRR",
        description: "返回由值中的数字表示的一系列现金流的内部收益率."
      },
      {
        name: "ISPMT",
        description: "计算在特定投资期内要支付的利息."
      },
      {
        name: "MDURATION",
        description: "返回假设面值¥100的有价证券的Macauley修正期限(麦考利久期)."
      },
      {
        name: "MIRR",
        description: "返回一系列定期现金流的修改后内部收益率,同时考虑投资的成本和现金再投资的收益率."
      },
      {
        name: "NOMINAL",
        description: "基于给定的实际利率和年复利期数,返回名义年利率."
      },
      {
        name: "NPER",
        description: "基于固定利率及等额分期付款方式,返回某项投资的总期数."
      },
      {
        name: "NPV",
        description: "使用贴现率和一系列未来支出(负值)和收益(正值)来计算一项投资的净现值."
      },
      {
        name: "ODDFPRICE",
        description: "返回首期付息日不固定(长期或短期)的面值¥100的有价证券价格."
      },
      {
        name: "ODDFYIELD",
        description: "返回首期付息日不固定的有价证券(长期或短期)的收益率."
      },
      {
        name: "ODDLPRICE",
        description: "返回末期付息日不固定的面值¥100的有价证券(长期或短期)的价格."
      },
      {
        name: "ODDLYIELD",
        description: "返回末期付息日不固定的有价证券(长期或短期)的收益率."
      },
      {
        name: "PDURATION",
        description: "返回投资到达指定值所需的期数."
      },
      {
        name: "PMT",
        description: "根据固定付款额和固定利率计算贷款的付款额."
      },
      {
        name: "PPMT",
        description: "返回根据定期固定付款和固定利率而定的投资在已知期间内的本金偿付额."
      },
      {
        name: "PRICE",
        description: "返回定期付息的面值¥100的有价证券的价格."
      },
      {
        name: "PRICEDISC",
        description: "返回折价发行的面值¥100的有价证券的价格."
      },
      {
        name: "PRICEMAT",
        description: "返回到期付息的面值¥100的有价证券的价格."
      },
      {
        name: "PV",
        description: "返回投资的现值."
      },
      {
        name: "RATE",
        description: "返回年金每期的利率."
      },
      {
        name: "RECEIVED",
        description: "返回一次性付息的有价证券到期收回的金额."
      },
      {
        name: "RRI",
        description: "返回投资增长的等效利率."
      },
      {
        name: "SLN",
        description: "返回一个期间内的资产的直线折旧值."
      },
      {
        name: "SYD",
        description: "返回在指定期间内资产按年限总和折旧法计算的折旧."
      },
      {
        name: "TBILLEQ",
        description: "返回国库券的等效收益率."
      },
      {
        name: "TBILLPRICE",
        description: "返回面值¥100的国库券价格."
      },
      {
        name: "TBILLYIELD",
        description: "返回国库券的收益率."
      },
      {
        name: "VDB",
        description: "使用双倍余额递减法或者其他指定方法,返回一笔资产在给定期间(包括部分期间)内的折旧值."
      },
      {
        name: "XIRR",
        description: "返回一组不一定定期发生的现金流的内部收益率."
      },
      {
        name: "XNPV",
        description: "返回一组现金流的净现值,这些现金流不一定定期发生."
      },
      {
        name: "YIELD",
        description: "返回定期支付利息的债券的收益."
      },
      {
        name: "YIELDDISC",
        description: "返回折价发行的有价证券的年收益率."
      },
      {
        name: "YIELDMAT",
        description: "返回到期付息的有价证券的年收益率."
      }
    ]
  },
  {
    name: "逻辑函数",
    funcs: [
      {
        name: "AND",
        description: "返回逻辑值:如果所有参数均为\"真(TRUE)\",返回\"真(TRUE)\",反之返回\"假(FALSE)\"."
      },
      {
        name: "FALSE",
        description: "返回值为FALSE."
      },
      {
        name: "IF",
        description: "根据提供的条件参数,条件计算结果为TRUE时,返回一个值;条件计算结果为FALSE时,返回另一个值."
      },
      {
        name: "IFERROR",
        description: "根据提供的初始条件的计算结果,如果计算结果错误,返回提供的第二个参数;否则返回初始条件的计算结果."
      },
      {
        name: "IFNA",
        description: "根据提供的初始条件的结果,如果结果为#N/A型错误,返回提供的第二个参数;否则返回初始条件的计算结果."
      },
      {
        name: "IFS",
        description: "根据提供的一个或多个条件参数,返回第一个TRUE结果对应的提供的参数."
      },
      {
        name: "NOT",
        description: "对提供的逻辑参数求反."
      },
      {
        name: "OR",
        description: "根据提供的一个或多个参数的逻辑值,任何一个参数逻辑值为TRUE时,返回TRUE;所有参数逻辑值为FALSE时,返回FALSE."
      },
      {
        name: "SWITCH",
        description: "将第一个表达式的计算结果与后续一组值比较,返回第一个匹配值对应的结果."
      },
      {
        name: "TRUE",
        description: "返回逻辑值为TRUE."
      },
      {
        name: "XOR",
        description: "返回提供的所有参数的异或逻辑运算值."
      }
    ]
  },
  {
    name: "文本函数",
    funcs: [
      {
        name: "ASC",
        description: "对于双字节符集(DBCS)语言,该函数将全角(双字节)字符转换成半角(单字节)字符."
      },
      {
        name: "BAHTTEXT",
        description: "将数字转换为泰语文本并添加后缀\"泰铢\"."
      },
      {
        name: "CHAR",
        description: "返回对应于数字代码的字符."
      },
      {
        name: "CLEAN",
        description: "删除文本中所有不能打印的字符."
      },
      {
        name: "CODE",
        description: "返回文本字符串中第一个字符的数字代码."
      },
      {
        name: "CONCAT",
        description: "返回一个或多个字符串合并后的字符串."
      },
      {
        name: "CONCATENATE",
        description: "返回一个或多个字符串合并后的字符串."
      },
      {
        name: "DOLLAR",
        description: "根据货币格式,将提供的数字根据指定的位数四舍五入后转换成文本."
      },
      {
        name: "EXACT",
        description: "比较两个字符串,如果他们完全相同,则返回TRUE,否则返回FALSE."
      },
      {
        name: "FIND",
        description: "返回查找的文本在目标文本中起始位置."
      },
      {
        name: "FINDB",
        description: "返回查找的文本在目标文本中起始位置."
      },
      {
        name: "FIXED",
        description: "将数字舍入到指定的小数位数."
      },
      {
        name: "LEFT",
        description: "从提供的文本第一个字符开始返回指定个数的字符."
      },
      {
        name: "LEFTB",
        description: "从提供的文本第一个字符开始返回指定个数的字符."
      },
      {
        name: "LEN",
        description: "返回文本字符串的字符个数."
      },
      {
        name: "LENB",
        description: "返回文本字符串的字符个数."
      },
      {
        name: "LOWER",
        description: "将文本字符串中的所有大写字母转换为小写字母."
      },
      {
        name: "MID",
        description: "返回文本字符串中从指定位置开始的特定数目的字符串."
      },
      {
        name: "MIDB",
        description: "返回文本字符串中从指定位置开始的特定数目的字符串."
      },
      {
        name: "NUMBERVALUE",
        description: "以与区域设置无关的方式将文本转换为数字."
      },
      {
        name: "PHONETIC",
        description: "提取文本字符串中的拼音字符."
      },
      {
        name: "PROPER",
        description: "将文本字符串的首字母以及文字中的任何非字母字符之后的任何其他字母转换成大写.将其余字母转换为小写."
      },
      {
        name: "REPLACE",
        description: "根据指定的字符个数,将部分文本字符串替换为新的文本字符串."
      },
      {
        name: "REPLACEB",
        description: "根据指定的字符个数,将部分文本字符串替换为新的文本字符串."
      },
      {
        name: "REPT",
        description: "将提供的文本重复一定次数."
      },
      {
        name: "RIGHT",
        description: "从提供的文本最后一个字符往前数,返回指定个数的字符."
      },
      {
        name: "RIGHTB",
        description: "从提供的文本最后一个字符往前数,返回指定个数的字符."
      },
      {
        name: "SEARCH",
        description: "返回查找的文本在目标文本中起始位置."
      },
      {
        name: "SEARCHB",
        description: "返回查找的文本在目标文本中起始位置."
      },
      {
        name: "SUBSTITUTE",
        description: "将文本中指定的部分旧文本使用新文本替换."
      },
      {
        name: "T",
        description: "测试提供的参数值是否为文本类型,如果是,返回该文本;否则返回空文本."
      },
      {
        name: "TEXT",
        description: "将数值转化为文本,并已指定格式显示."
      },
      {
        name: "TEXTJOIN",
        description: "将1个或1个以上的文本字符串合并,并以指定的分隔符分开."
      },
      {
        name: "TRIM",
        description: "移除文本之间空格之外的所有空格."
      },
      {
        name: "UNICHAR",
        description: "返回给定数值引用的Unicode字符."
      },
      {
        name: "UNICODE",
        description: "返回对应于文本的第一个字符的数字代码."
      },
      {
        name: "UPPER",
        description: "将文本转换为大写字母."
      },
      {
        name: "VALUE",
        description: "将表示数字的文本字符串转换为数字."
      },
      {
        name: "WIDECHAR",
        description: "将单字节字符转换成双字节字符,与双字节字符集一起使用."
      }
    ]
  },
  {
    name: "日期和时间函数",
    funcs: [
      {
        name: "DATE",
        description: "将提供的年、月、和日参数转换为日期."
      },
      {
        name: "DATEDIF",
        description: "根据指定的间隔单位返回两个日期的差异值."
      },
      {
        name: "DATEVALUE",
        description: "将文本格式的日期转换为标准日期格式."
      },
      {
        name: "DAY",
        description: "返回日期的天数,介于1到31."
      },
      {
        name: "DAYS360",
        description: "函数按照一年360天(12x30)的规则,返回两个日期间相差的天数."
      },
      {
        name: "DAYS",
        description: "返回两个日期之间的天数."
      },
      {
        name: "EDATE",
        description: "返回与指定的起始日期相隔指定月数的日期."
      },
      {
        name: "EOMONTH",
        description: "返回与指定的起始日期相隔指定月数的日期所在月的最后一天的日期."
      },
      {
        name: "HOUR",
        description: "返回时间的小时数,介于0至23."
      },
      {
        name: "ISOWEEKNUM",
        description: "返回指定日期在全年中的ISO周数."
      },
      {
        name: "MINUTE",
        description: "返回时间的分钟数,介于0至59之间的整数."
      },
      {
        name: "MONTH",
        description: "返回给定日期的月份,介于1至12之间的整数."
      },
      {
        name: "NETWORKDAYS.INTL",
        description: "返回两个指定的日期之间除指定的周末和假期外的工作日数量."
      },
      {
        name: "NETWORKDAYS",
        description: "返回两个日期之间的工作日数量."
      },
      {
        name: "NOW",
        description: "函数返回当前日期和时间."
      },
      {
        name: "SECOND",
        description: "返回时间的秒数,介于0至59之间的整数."
      },
      {
        name: "TIME",
        description: "将提供的小时、分钟、秒参数转换为十进制时间."
      },
      {
        name: "TIMEVALUE",
        description: "将文本格式的时间转换为十进制表示的时间."
      },
      {
        name: "TODAY",
        description: "返回当天的日期."
      },
      {
        name: "WEEKDAY",
        description: "返回某一日期在一周中的第几天,介于1至7范围内的整数."
      },
      {
        name: "WEEKNUM",
        description: "返回给定日期的一年中的周数."
      },
      {
        name: "WORKDAY.INTL",
        description: "返回在给定起始日期之前或之后,与该日期相隔给定的工作日的日期."
      },
      {
        name: "WORKDAY",
        description: "返回在给定起始日期之前或之后,与该日期相隔给定的工作日的日期."
      },
      {
        name: "YEAR",
        description: "返回给定日期的年份,介于1900至9999之间的整数."
      },
      {
        name: "YEARFRAC",
        description: "返回给定起始日期和结束日期之间的天数在全年天数的百分比."
      }
    ]
  },
  {
    name: "查找和引用函数",
    funcs: [
      {
        name: "ADDRESS",
        description: "根据提供的行号和列号参数以文本格式返回其代表的单元格引用."
      },
      {
        name: "AREAS",
        description: "返回引用中的区域数量."
      },
      {
        name: "CHOOSE",
        description: "从一组数据中根据索引位置参数返回相应位置的数值."
      },
      {
        name: "COLUMN",
        description: "返回单元格引用的列号."
      },
      {
        name: "COLUMNS",
        description: "返回单元格区域引用或数组的列数."
      },
      {
        name: "FORMULATEXT",
        description: "以文本格式返回指定单元格的公式."
      },
      {
        name: "GETPIVOTDATA",
        description: "返回数据透视表中的数据."
      },
      {
        name: "HLOOKUP",
        description: "在表格中的第一行查找指定的数值,返回所在列中指定行的数值."
      },
      {
        name: "HYPERLINK",
        description: "针对支持的目标位置创建超链接跳转."
      },
      {
        name: "INDEX(引用形式)",
        description: "返回指定的行与列交叉处的单元格引用."
      },
      {
        name: "INDEX(数组形式)",
        description: "根据指定的行号与列号返回表格或数组中的元素."
      },
      {
        name: "INDIRECT",
        description: "将文本格式引用文本转换为标准Excel引用."
      },
      {
        name: "LOOKUP(向量形式)",
        description: "在一列或一行区域中查找值,并在第二个对应的一列或一行中返回相同位置的值."
      },
      {
        name: "LOOKUP(数组形式)",
        description: "从提供的数组的第一行或第一列查找指定的值,返回数组最后一行或最后一列中同一位置的值."
      },
      {
        name: "MATCH",
        description: "从提供的单元格区域中查找指定值,并返回指定值在单元格区域中的相对位置."
      },
      {
        name: "OFFSET",
        description: "根据指定的行偏移量和列偏移量,从初始位置计算,返回指定偏移量的单元格或单元格区域."
      },
      {
        name: "ROW",
        description: "返回单元格引用的行号."
      },
      {
        name: "ROWS",
        description: "返回单元格区域引用或数组的行数."
      },
      {
        name: "RTD",
        description: "从支持COM自动化的程序中检索实时数据."
      },
      {
        name: "TRANSPOSE",
        description: "返回提供的单元格区域的转置."
      },
      {
        name: "VLOOKUP",
        description: "在指定单元格区域的第一列查找指定的查找值,返回所在行中指定列的值."
      }
    ]
  },
  {
    name: "数学和三角函数",
    funcs: [
      {
        name: "ABS",
        description: "返回数字的绝对值."
      },
      {
        name: "ACOS",
        description: "返回数字的反余弦值."
      },
      {
        name: "ACOSH",
        description: "返回数字的反双曲余弦值."
      },
      {
        name: "ACOT",
        description: "返回数字的反余切值的主值."
      },
      {
        name: "ACOTH",
        description: "返回数字的反双曲余切值."
      },
      {
        name: "AGGREGATE",
        description: "按一定条件返回一组列表或数据库的合计."
      },
      {
        name: "ARABIC",
        description: "将罗马数字转换为阿拉伯数字."
      },
      {
        name: "ASIN",
        description: "返回数字的反正弦值."
      },
      {
        name: "ASINH",
        description: "返回数字的反双曲正弦值."
      },
      {
        name: "ATAN2",
        description: "返回给定X轴及Y轴坐标值的反正切值."
      },
      {
        name: "ATAN",
        description: "返回数字的反正切值."
      },
      {
        name: "ATANH",
        description: "返回数字的反双曲正切值."
      },
      {
        name: "BASE",
        description: "将数字转换为指定基数的数字,返回其文本表示."
      },
      {
        name: "CEILING.PRECISE",
        description: "将数字向上舍入到整数或者以指定基数的倍数向上舍入(沿绝对值增大的方向)."
      },
      {
        name: "CEILING.MATH",
        description: "将数字向上舍入到整数或者以指定基数的倍数向上舍入."
      },
      {
        name: "CEILING",
        description: "将数字向上舍入(沿绝对值增大的方向)到最近的指定基数的倍数."
      },
      {
        name: "COMBIN",
        description: "返回指定数量元素的总组合数."
      },
      {
        name: "COMBINA",
        description: "返回指定数量元素的总组合数(包含重复项)."
      },
      {
        name: "COS",
        description: "返回角度的余弦值."
      },
      {
        name: "COSH",
        description: "返回数字的双曲余弦值."
      },
      {
        name: "COT",
        description: "返回角度的余切值."
      },
      {
        name: "COTH",
        description: "返回角度的双曲余切值."
      },
      {
        name: "CSC",
        description: "返回角度的余割值."
      },
      {
        name: "CSCH",
        description: "返回角度的双曲余割值."
      },
      {
        name: "DECIMAL",
        description: "将指定基数表示的文本数字转换为十进制数字."
      },
      {
        name: "DEGREES",
        description: "将弧度转换为角度."
      },
      {
        name: "EVEN",
        description: "函数将向上舍入到最接近的偶数(远离0的方向)."
      },
      {
        name: "EXP",
        description: "函数返回自然常数e的n次幂."
      },
      {
        name: "FACT",
        description: "返回提供数值的阶乘."
      },
      {
        name: "FACTDOUBLE",
        description: "返回提供数值的双倍阶乘."
      },
      {
        name: "FLOOR.MATH",
        description: "将数字向下舍入(沿绝对值减小的方向)到最近的指定基数的倍数,可以指定负数舍入的方向."
      },
      {
        name: "FLOOR.PRECISE",
        description: "将数字向下舍入到整数或者以指定基数的倍数向下舍入."
      },
      {
        name: "FLOOR",
        description: "将数字向下舍入(沿绝对值减小的方向)到最近的指定基数的倍数."
      },
      {
        name: "GCD",
        description: "返回两个或多个整数的最大公约数."
      },
      {
        name: "INT",
        description: "将数字向下舍入到最接近的整数."
      },
      {
        name: "ISO.CEILING",
        description: "将数字向上(值增大的方向)舍入到最接近的整数或提供基数的倍数."
      },
      {
        name: "LCM",
        description: "返回一个或多个整数的最小公倍数."
      },
      {
        name: "LN",
        description: "函数返回数字的自然对数."
      },
      {
        name: "LOG10",
        description: "返回数字以10为底的对数."
      },
      {
        name: "LOG",
        description: "返回数字以指定底数的对数."
      },
      {
        name: "MDETERM",
        description: "返回矩阵行列式的值."
      },
      {
        name: "MINVERSE",
        description: "返回提供矩阵的逆矩阵."
      },
      {
        name: "MMULT",
        description: "返回两个矩阵的乘积."
      },
      {
        name: "MOD",
        description: "返回两数相除的余数."
      },
      {
        name: "MROUND",
        description: "将数值舍入到指定基数的倍数."
      },
      {
        name: "MULTINOMIAL",
        description: "返回各参数和的阶乘与各参数阶乘乘积的比值."
      },
      {
        name: "MUNIT",
        description: "返回指定维度的单位矩阵."
      },
      {
        name: "ODD",
        description: "将数字向上舍入到最接近的奇数(远离0的方向)."
      },
      {
        name: "PI",
        description: "返回数学常量的值3.14159265358979."
      },
      {
        name: "POWER",
        description: "返回数字的乘幂."
      },
      {
        name: "PRODUCT",
        description: "返回一个或多个参数的乘积."
      },
      {
        name: "QUOTIENT",
        description: "返回两个数相除后的整数部分."
      },
      {
        name: "RADIANS",
        description: "将度数转换为弧度."
      },
      {
        name: "RAND",
        description: "返回介于0和1之间均匀分布随机实数."
      },
      {
        name: "RANDBETWEEN",
        description: "返回介于指定两数之间随机整数."
      },
      {
        name: "ROMAN",
        description: "将阿拉伯数字转换为罗马数字."
      },
      {
        name: "ROUND",
        description: "将数字四舍五入到指定位数的数字."
      },
      {
        name: "ROUNDDOWN",
        description: "将数字向零的方向舍入到指定位数的数字."
      },
      {
        name: "ROUNDUP",
        description: "将数字向远离零的方向舍入到指定位数的数字."
      },
      {
        name: "SEC",
        description: "返回角度的正割值."
      },
      {
        name: "SECH",
        description: "返回角度的双曲正割值."
      },
      {
        name: "SERIESSUM",
        description: "返回幂级数之和."
      },
      {
        name: "SIGN",
        description: "确定数字的符号."
      },
      {
        name: "SIN",
        description: "返回角度的正弦值."
      },
      {
        name: "SINH",
        description: "返回数字的双曲正弦值."
      },
      {
        name: "SQRT",
        description: "返回数字的平方根."
      },
      {
        name: "SQRTPI",
        description: "返回一个数字与PI的乘积的平方根."
      },
      {
        name: "SUBTOTAL",
        description: "返回一组数据的分类汇总值."
      },
      {
        name: "SUM",
        description: "计算一个或多个数字的和."
      },
      {
        name: "SUMIF",
        description: "计算一区域中符合指定条件的数字的和."
      },
      {
        name: "SUMIFS",
        description: "计算一区域中符合多个指定条件的数字的和."
      },
      {
        name: "SUMPRODUCT",
        description: "在给定的多个数组中,将数组间的对应元素相乘,返回乘积之和."
      },
      {
        name: "SUMSQ",
        description: "计算各参数的平方和."
      },
      {
        name: "SUMX2MY2",
        description: "计算两组数组中对应元素的平方差之和."
      },
      {
        name: "SUMX2PY2",
        description: "计算两组数组中对应元素的平方和之和."
      },
      {
        name: "SUMXMY2",
        description: "计算两组数组中对应元素之差的平方和."
      },
      {
        name: "TAN",
        description: "返回角度的正切值."
      },
      {
        name: "TANH",
        description: "返回数字的双曲正切值."
      },
      {
        name: "TRUNC",
        description: "将数字从指定的小数点位置截断,并返回其截断后的数字."
      }
    ]
  },
  {
    name: "统计函数",
    funcs: [
      {
        name: "AVEDEV",
        description: "返回一组数据点到其平均值的绝对偏差的平均值."
      },
      {
        name: "AVERAGE",
        description: "返回一组数据的平均值."
      },
      {
        name: "AVERAGEA",
        description: "返回一组数据的平均值."
      },
      {
        name: "AVERAGEIF",
        description: "返回一组数据中满足指定条件的值的平均值."
      },
      {
        name: "AVERAGEIFS",
        description: "返回一组数据中满足多个指定条件的数据的平均值."
      },
      {
        name: "BETA.DIST",
        description: "返回Beta分布."
      },
      {
        name: "BETA.INV",
        description: "返回Beta累积概率密度函数(BETA.DIST)的反函数."
      },
      {
        name: "BINOM.DIST",
        description: "返回一元二项式分布的概率."
      },
      {
        name: "BINOM.INV",
        description: "返回使得累积二项式分布的函数值≥临界值的最小整数的数值."
      },
      {
        name: "BINOM.DIST.RANGE",
        description: "使用二项式分布返回试验结果的概率."
      },
      {
        name: "CHISQ.DIST",
        description: "返回卡方分布(Chi-Square Distribution)."
      },
      {
        name: "CHISQ.INV",
        description: "返回卡方分布的左尾概率反函数."
      },
      {
        name: "CHISQ.TEST",
        description: "返回独立性检验值."
      },
      {
        name: "CHISQ.DIST.RT",
        description: "返回卡方分布的右尾概率."
      },
      {
        name: "CHISQ.INV.RT",
        description: "返回卡方分布的右尾概率的反函数."
      },
      {
        name: "CONFIDENCE.NORM",
        description: "使用正太分布返回总体平均值的置信区间."
      },
      {
        name: "CONFIDENCE.T",
        description: "使用t-分布返回总体平均值的置信区间."
      },
      {
        name: "CORREL",
        description: "返回两组数据的相关系数."
      },
      {
        name: "COUNT",
        description: "统计指定区域中数字的个数."
      },
      {
        name: "COUNTA",
        description: "统计指定区域中非空单元格的个数."
      },
      {
        name: "COUNTBLANK",
        description: "统计指定单元格区域中空白单元格的个数."
      },
      {
        name: "COUNTIF",
        description: "统计指定单元格区域中符合指定条件的单元格个数."
      },
      {
        name: "COUNTIFS",
        description: "返回指定单元格区域中符合多个指定条件的单元格个数."
      },
      {
        name: "COVARIANCE.P",
        description: "返回总体协方差."
      },
      {
        name: "COVARIANCE.S",
        description: "返回样本协方差."
      },
      {
        name: "DEVSQ",
        description: "返回各一组数据与其均值之差的平方和."
      },
      {
        name: "EXPON.DIST",
        description: "返回指数分布."
      },
      {
        name: "F.INV",
        description: "返回F概率分布函数的反函数."
      },
      {
        name: "F.DIST",
        description: "返回F分布."
      },
      {
        name: "F.TEST",
        description: "返回F检验结果,即当两组数据的方差无明显差异是的双尾概率."
      },
      {
        name: "F.DIST.RT",
        description: "返回右尾F概率分布."
      },
      {
        name: "F.INV.RT",
        description: "返回右尾F概率分布函数的反函数."
      },
      {
        name: "FISHER",
        description: "返回一个数值的Fisher变换值."
      },
      {
        name: "FISHERINV",
        description: "返回一个数值的Fisher逆变换值."
      },
      {
        name: "FORECAST.ETS",
        description: "根据已有的值,使用指数平滑算法预测未来的值."
      },
      {
        name: "FORECAST.LINEAR",
        description: "根据已有的值,使用线性回归方法预测未来值."
      },
      {
        name: "FORECAST.ETS.CONFINT",
        description: "计算使用FORECAST.ETS函数预测值的置信区间."
      },
      {
        name: "FORECAST.ETS.SEASONALITY",
        description: "返回已知数据季节性规律在时间轴上的长度."
      },
      {
        name: "FORECAST.ETS.STAT",
        description: "返回基于时间序列预测的结果的指定统计值."
      },
      {
        name: "FORECAST",
        description: "根据已有的值预测未来的值."
      },
      {
        name: "FREQUENCY",
        description: "统计数值在指定范围内出现的频率,并以数组形式返回."
      },
      {
        name: "GAMMA.DIST",
        description: "返回GAMMA函数的值."
      },
      {
        name: "GAMMA.INV",
        description: "返回GAMMA函数的反函数."
      },
      {
        name: "GAMMA",
        description: "对于指定的数值,返回其GAMMA函数值."
      },
      {
        name: "GAMMALN.PRECISE",
        description: "返回GAMMA函数的自然对数."
      },
      {
        name: "GAMMALN",
        description: "返回GAMMA函数的自然对数."
      },
      {
        name: "GAUSS",
        description: "返回标准正态分布的比累积分布函数小0.5的值."
      },
      {
        name: "GEOMEAN",
        description: "返回一组正数的几何平均值."
      },
      {
        name: "GROWTH",
        description: "使用指数曲线拟合方法,根据已有的数据预测未来值."
      },
      {
        name: "HARMEAN",
        description: "返回一组数据的调和平均值."
      },
      {
        name: "HYPGEOM.DIST",
        description: "返回超几何分布."
      },
      {
        name: "INTERCEPT",
        description: "根据已有的X值和Y值计算其线性回归与Y轴的交叉点."
      },
      {
        name: "KURT",
        description: "返回一组数据的峰值."
      },
      {
        name: "LARGE",
        description: "返回一组数据的第K个最大值."
      },
      {
        name: "LINEST",
        description: "根据已有的数据,使用最小二乘法计算与现有数据最佳拟合的直线,返回描述此直线的数组."
      },
      {
        name: "LOGEST",
        description: "根据已有的数据,计算与现有数据最佳拟合的指数回归曲线,返回描述此曲线的数组."
      },
      {
        name: "LOGNORM.DIST",
        description: "返回对数分布函数."
      },
      {
        name: "LOGNORM.INV",
        description: "返回对数累积分布函数的反函数值."
      },
      {
        name: "MAX",
        description: "返回一组数据中的最大值."
      },
      {
        name: "MAXA",
        description: "返回一组数据中的最大值."
      },
      {
        name: "MAXIFS",
        description: "返回一组数据中符合一个或多个指定条件的最大值."
      },
      {
        name: "MEDIAN",
        description: "返回一组数据的中位置."
      },
      {
        name: "MIN",
        description: "返回一组数据中的最小值."
      },
      {
        name: "MINA",
        description: "返回一组数据中的最小值."
      },
      {
        name: "MINIFS",
        description: "返回一组数据中符合一个或多个指定条件的最小值."
      },
      {
        name: "MODE.MULT",
        description: "返回一组数据的众数(出现频率最多的数值)."
      },
      {
        name: "MODE.SNGL",
        description: "返回一组数据的众数(出现频率最多的数值)."
      },
      {
        name: "NEGBINOM.DIST",
        description: "返回负二项式分布."
      },
      {
        name: "NORM.DIST",
        description: "返回正态分布函数."
      },
      {
        name: "NORM.INV",
        description: "返回正态累积分布函数的反函数."
      },
      {
        name: "NORM.S.DIST",
        description: "返回标准正态分布函数,即平均值为0,标准差为1."
      },
      {
        name: "NORM.S.INV",
        description: "返回标准正太累积分布函数的反函数值."
      },
      {
        name: "PEARSON",
        description: "返回Pearson(皮尔生)乘积矩相关系数."
      },
      {
        name: "PERCENTILE.INC",
        description: "返回一组数值的第K个百分点的值."
      },
      {
        name: "PERCENTILE.EXC",
        description: "返回一组数值的第K个百分点的值."
      },
      {
        name: "PERCENTRANK.EXC",
        description: "返回指定数值在一组数值中的百分比排位."
      },
      {
        name: "PERCENTRANK.INC",
        description: "返回指定数值在一组数值中的百分比排位."
      },
      {
        name: "PERMUT",
        description: "返回从给定数目的对象中选取指定数量对象的排列数."
      },
      {
        name: "PERMUTATIONA",
        description: "返回从给定数目的对象中选取指定数量对象(含重复)的排列数."
      },
      {
        name: "PHI",
        description: "返回标准正态分布的密度函数."
      },
      {
        name: "POISSON.DIST",
        description: "返回泊松分布."
      },
      {
        name: "PROB",
        description: "返回某一区域中的数值落在指定区间内的概率."
      },
      {
        name: "QUARTILE.EXC",
        description: "返回基于0到1(不包含0和1)的百分点值对应数据集四分位数."
      },
      {
        name: "QUARTILE.INC",
        description: "返回基于0到1(包含0和1)的百分点值对应数据集四分位数."
      },
      {
        name: "RANK.AVG",
        description: "返回指定数字在一列数字中的排名."
      },
      {
        name: "RANK.EQ",
        description: "返回指定数字在一列数字中的排名."
      },
      {
        name: "RSQ",
        description: "根据已知的两组数据返回Pearson(皮尔生)乘积矩相关系数的平方."
      },
      {
        name: "SKEW.P",
        description: "返回基于样本总体分布的偏斜度."
      },
      {
        name: "SKEW",
        description: "返回一分布的偏斜度."
      },
      {
        name: "SLOPE",
        description: "根据已知的两组数据点返回其线性回归线的斜率."
      },
      {
        name: "SMALL",
        description: "返回一组数据的第K个最小值."
      },
      {
        name: "STANDARDIZE",
        description: "返回指定的平均值和标准偏差表示的分布的正态化数值."
      },
      {
        name: "STDEV.S",
        description: "基于样本估算并返回标准偏差."
      },
      {
        name: "STDEV.P",
        description: "计算并返回指定一组数据的总体标准偏差."
      },
      {
        name: "STDEVA",
        description: "基于样本估算并返回标准偏差."
      },
      {
        name: "STDEVPA",
        description: "计算并返回指定一组数据的总体标准偏差."
      },
      {
        name: "STEYX",
        description: "返回通过线性回归法预测每个x的y值时所产生的标准误差."
      },
      {
        name: "T.DIST",
        description: "返回左尾学生t-部分."
      },
      {
        name: "T.TEST",
        description: "返回与学生t-检验相关的概率."
      },
      {
        name: "T.INV",
        description: "返回左尾学生t-分布的反函数."
      },
      {
        name: "T.DIST.RT",
        description: "返回右尾学生t-分布."
      },
      {
        name: "T.DIST.2T",
        description: "返回双尾学生t-分布."
      },
      {
        name: "T.INV.2T",
        description: "返回双尾学生t-分布的反函数."
      },
      {
        name: "TREND",
        description: "返回线性趋势值."
      },
      {
        name: "TRIMMEAN",
        description: "返回一组数据的内部平均值."
      },
      {
        name: "VAR.P",
        description: "计算并返回整个样本总体的方差."
      },
      {
        name: "VAR.S",
        description: "基于样本估算并返回方差."
      },
      {
        name: "VARA",
        description: "基于样本估算并返回方差."
      },
      {
        name: "VARPA",
        description: "计算并返回整个样本总体的方差."
      },
      {
        name: "WEIBULL.DIST",
        description: "返回韦伯(Weibull)分布."
      },
      {
        name: "Z.TEST",
        description: "返回z检验的单尾概率值."
      }
    ]
  },
  {
    name: "工程函数",
    funcs: [
      {
        name: "BESSELI",
        description: "返回修正贝塞尔(Bessel)函数值,ln(x)."
      },
      {
        name: "BESSELJ",
        description: "返回贝塞尔(Bessel)函数值."
      },
      {
        name: "BESSELK",
        description: "返回修正贝塞尔(Bessel)函数值,Kn(x)."
      },
      {
        name: "BESSELY",
        description: "返回修正贝塞尔(Bessel)函数值,Yn(x)."
      },
      {
        name: "BIN2DEC",
        description: "将二进制数字转换为十进制数字."
      },
      {
        name: "BIN2HEX",
        description: "将二进制数字转换为十六进制数字."
      },
      {
        name: "BIN2OCT",
        description: "将二进制数字转换为八进制数字."
      },
      {
        name: "BITAND",
        description: "返回两个数的按位进行\"与\"(AND)运算后的结果."
      },
      {
        name: "BITLSHIFT",
        description: "返回一个数向左移动指定位数后的数值."
      },
      {
        name: "BITOR",
        description: "返回两个数的按位进行\"或\"(OR)运算后的结果."
      },
      {
        name: "BITRSHIFT",
        description: "返回一个数向右移动指定位数后的数值."
      },
      {
        name: "BITXOR",
        description: "返回两个数的按位进行\"异或\"(XOR)运算后的结果."
      },
      {
        name: "COMPLEX",
        description: "将实系数及虚系数转换为x+yi或x+yj形式的负数."
      },
      {
        name: "CONVERT",
        description: "将提供的数字从一种度量系统转换为第二种度量系统."
      },
      {
        name: "DEC2BIN",
        description: "将十进制数字转换为二进制数字."
      },
      {
        name: "DEC2HEX",
        description: "将十进制数字转换为十六进制数字."
      },
      {
        name: "DEC2OCT",
        description: "将十进制数字转换为八进制数字."
      },
      {
        name: "DELTA",
        description: "检验两个数值是否相等."
      },
      {
        name: "ERF.PRECISE",
        description: "返回误差函数的积分."
      },
      {
        name: "ERF",
        description: "返回误差函数在上下限之间的积分."
      },
      {
        name: "ERFC.PRECISE",
        description: "返回从指定下限值到无穷大积分的互补ERF函数."
      },
      {
        name: "ERFC",
        description: "返回从下限值到无穷大积分的互补ERF函数."
      },
      {
        name: "GESTEP",
        description: "检验提供的数值是否大于提供的步长."
      },
      {
        name: "HEX2BIN",
        description: "将十六进制数字转换为二进制数字."
      },
      {
        name: "HEX2DEC",
        description: "将十六进制数字转换为十进制数字."
      },
      {
        name: "HEX2OCT",
        description: "将十六进制数字转换为八进制数字."
      },
      {
        name: "IMABS",
        description: "返回复数的绝对值(模)."
      },
      {
        name: "IMAGINARY",
        description: "返回复数的虚系数."
      },
      {
        name: "IMARGUMENT",
        description: "返回复数的θ(Theta)参数."
      },
      {
        name: "IMCONJUGATE",
        description: "返回复数的共轭复数."
      },
      {
        name: "IMCOS",
        description: "返回复数的余弦值."
      },
      {
        name: "IMCOSH",
        description: "返回复数的双曲余弦值."
      },
      {
        name: "IMCOT",
        description: "返回复数的余切值."
      },
      {
        name: "IMCSC",
        description: "返回复数的余割值."
      },
      {
        name: "IMCSCH",
        description: "返回复数的双曲余割值."
      },
      {
        name: "IMDIV",
        description: "返回两个复数的商."
      },
      {
        name: "IMEXP",
        description: "返回复数的指数."
      },
      {
        name: "IMLN",
        description: "返回复数的自然对数."
      },
      {
        name: "IMLOG2",
        description: "返回复数的以2为底数的对数."
      },
      {
        name: "IMLOG10",
        description: "返回复数的常用对数(以10为底数)."
      },
      {
        name: "IMPOWER",
        description: "返回复数的n次幂."
      },
      {
        name: "IMPRODUCT",
        description: "返回多个复数的乘积."
      },
      {
        name: "IMREAL",
        description: "返回复数的实系数."
      },
      {
        name: "IMSEC",
        description: "返回复数的正割值."
      },
      {
        name: "IMSECH",
        description: "返回复数的双曲正割值."
      },
      {
        name: "IMSIN",
        description: "返回复数的正弦值."
      },
      {
        name: "IMSINH",
        description: "返回复数的双曲正弦值."
      },
      {
        name: "IMSQRT",
        description: "返回复数的平方根."
      },
      {
        name: "IMSUB",
        description: "返回两个复数的差."
      },
      {
        name: "IMSUM",
        description: "返回多个复数的和."
      },
      {
        name: "IMTAN",
        description: "返回复数的正切值."
      },
      {
        name: "OCT2BIN",
        description: "将八进制数字转换为二进制数字."
      },
      {
        name: "OCT2DEC",
        description: "将八进制数字转换为十进制数字."
      },
      {
        name: "OCT2HEX",
        description: "将八进制数字转换为十六进制数字."
      }
    ]
  },
  {
    name: "多维数据集函数",
    funcs: [
      {
        name: "CUBEKPIMEMBER",
        description: "返回重要性能指示器(KPI)属性,并在单元格中显示KPI名称."
      },
      {
        name: "CUBEMEMBER",
        description: "返回多维数据集中的成员或元组."
      },
      {
        name: "CUBEMEMBERPROPERTY",
        description: "返回多维数据集中成员属性的值."
      },
      {
        name: "CUBERANKEDMEMBER",
        description: "返回集合中的第n个或排在一定名次的成员."
      },
      {
        name: "CUBESET",
        description: "定义成员或元组的计算集."
      },
      {
        name: "CUBESETCOUNT",
        description: "返回集合中的项目数."
      },
      {
        name: "CUBEVALUE",
        description: "返回多维数据集汇总值."
      }
    ]
  },
  {
    name: "信息函数",
    funcs: [
      {
        name: "CELL",
        description: "返回有关单元格的格式、位置或内容的信息."
      },
      {
        name: "ERROR.TYPE",
        description: "返回Excel中错误值对应的数字."
      },
      {
        name: "INFO",
        description: "返回有关当前操作环境的信息."
      },
      {
        name: "ISBLANK",
        description: "检查指定的单元格是否空白."
      },
      {
        name: "ISERR",
        description: "检查指定的值是否任意错误值(除#N/A外)."
      },
      {
        name: "ISERROR",
        description: "检查指定的值是否任意错误值."
      },
      {
        name: "ISEVEN",
        description: "检查指定的值是否是偶数."
      },
      {
        name: "ISFORMULA",
        description: "检查指定的单元格是否包含公式."
      },
      {
        name: "ISLOGICAL",
        description: "检查指定的值是否是逻辑值."
      },
      {
        name: "ISNA",
        description: "检查指定的单元格是否返回#N/A错误值."
      },
      {
        name: "ISNONTEXT",
        description: "检查指定的值是否是非文本."
      },
      {
        name: "ISNUMBER",
        description: "检查指定的值是否是数字."
      },
      {
        name: "ISODD",
        description: "检查指定的值是否是奇数."
      },
      {
        name: "ISREF",
        description: "检查指定的值是否是引用."
      },
      {
        name: "ISTEXT",
        description: "检查指定的值是否是文本."
      },
      {
        name: "N",
        description: "将提供的值转换成数字."
      },
      {
        name: "NA",
        description: "返回错误值#N/A."
      },
      {
        name: "SHEET",
        description: "返回指定工作表的工作表编号."
      },
      {
        name: "SHEETS",
        description: "返回引用中的工作表数量."
      },
      {
        name: "TYPE",
        description: "返回提供的值的类型."
      }
    ]
  },
  {
    name: "兼容性函数",
    funcs: [
      {
        name: "BETADIST",
        description: "返回Beta概率密度函数."
      },
      {
        name: "BETAINV",
        description: "返回Beta累积概率密度函数的反函数."
      },
      {
        name: "BINOMDIST",
        description: "返回一元二项式分布的概率."
      },
      {
        name: "CHIDIST",
        description: "返回卡方分布(Chi-Square Distribution)的右尾概率."
      },
      {
        name: "CHIINV",
        description: "返回卡方分布(Chi-Square Distribution)的右尾概率的反函数."
      },
      {
        name: "CHITEST",
        description: "返回独立性检验值."
      },
      {
        name: "CONFIDENCE",
        description: "使用正态分布返回总体平均值的置信区间."
      },
      {
        name: "COVAR",
        description: "返回总体协方差."
      },
      {
        name: "CRITBINOM",
        description: "返回使得累积二项式分布的函数值≥临界值的最小整数的数值."
      },
      {
        name: "EXPONDIST",
        description: "返回指数分布."
      },
      {
        name: "FDIST",
        description: "返回右尾F概率分布."
      },
      {
        name: "FINV",
        description: "返回右尾F概率分布函数的反函数."
      },
      {
        name: "FTEST",
        description: "返回F检验结果,即当两组数据的方差无明显差异是的双尾概率."
      },
      {
        name: "GAMMADIST",
        description: "返回GAMMA函数的值."
      },
      {
        name: "GAMMAINV",
        description: "返回GAMMA函数的反函数值."
      },
      {
        name: "HYPGEOMDIST",
        description: "返回超几何分布."
      },
      {
        name: "LOGINV",
        description: "返回对数累积分布函数的反函数值."
      },
      {
        name: "LOGNORMDIST",
        description: "返回对数累积分布函数."
      },
      {
        name: "MODE",
        description: "返回一组数据的众数(出现频率最多的数值)."
      },
      {
        name: "NEGBINOMDIST",
        description: "返回负二项式分布."
      },
      {
        name: "NORMDIST",
        description: "返回正态分布函数."
      },
      {
        name: "NORMINV",
        description: "返回正态累积分布函数的反函数值."
      },
      {
        name: "NORMSDIST",
        description: "返回标准正态累积分布函数,即平均值为0,标准差为1."
      },
      {
        name: "NORMSINV",
        description: "返回标准正态累积分布函数的反函数值."
      },
      {
        name: "PERCENTILE",
        description: "返回一组数值的第k个百分点的值."
      },
      {
        name: "PERCENTRANK",
        description: "返回指定数值在一组数值中的百分比排位."
      },
      {
        name: "POISSON",
        description: "返回泊松分布."
      },
      {
        name: "QUARTILE",
        description: "返回基于0到1(包含0和1)的百分点值对应数据集四分位数."
      },
      {
        name: "RANK",
        description: "返回指定数字在一列数字中的排名."
      },
      {
        name: "STDEV",
        description: "基于样本估算并返回标准差."
      },
      {
        name: "STDEVP",
        description: "计算并返回指定一组数据的总体标准偏差."
      },
      {
        name: "TDIST",
        description: "返回学生t-分布."
      },
      {
        name: "TINV",
        description: "返回双尾学生t-分布的反函数."
      },
      {
        name: "TTEST",
        description: "返回与学生t-检验相关的概率."
      },
      {
        name: "VAR",
        description: "基于样本估算并返回方差."
      },
      {
        name: "VARP",
        description: "计算并返回整个样本总体的方差."
      },
      {
        name: "WEIBULL",
        description: "返回韦伯(Weibull)分布."
      },
      {
        name: "ZTEST",
        description: "返回z检验的单尾概率值."
      }
    ]
  },
  {
    name: "Web函数",
    funcs: [
      {
        name: "WEBSERVICE",
        description: "从Web服务器返回数据."
      },
      {
        name: "ENCODEURL",
        description: "返回URL编码的字符串."
      },
      {
        name: "FILTERXML",
        description: "通过使用指定的XPath,返回XML内容中的特定数据."
      }
    ]
  }
];

export const excelFuncs = excelFuncsByCategory.flatMap((funcs) => funcs);
export const excelFuncsWithCategory = excelFuncsByCategory.flatMap(({ funcs, name}) =>
  funcs.map(func => ({ category: name, ...func })),
);

export const loadFuncsByCategory = function(category: string): ExcelFunc[] {
  const filteredCategory = excelFuncsByCategory.filter((cat) => {
    return cat.name == category;
  });
  if (filteredCategory.length > 0) {
    return filteredCategory[0].funcs;
  } else {
    return [];
  }
}

