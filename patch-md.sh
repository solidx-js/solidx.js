#!/bin/bash

# 遍历 docs/docs 目录下所有的 *.md 文件
for file in $(find docs/docs -name "*.md")
do
  # 判断当前的操作系统
  if [[ "$(uname)" == "Darwin" ]]; then
    # macOS
    sed -i '' 's/Array<number>/number[]/g' $file
  else
    # Linux
    sed -i 's/Array<number>/number[]/g' $file
  fi
done