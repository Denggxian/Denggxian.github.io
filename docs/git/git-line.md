---
title: git命令
---

## fork
### Github进行fork后如何与原仓库同步
假设有原仓库base,我们将其fork到自己的仓库中self,然后将self代码clone到本地 \
然后base更新了代码，此时我们本地的self如何拉取base的新代码？
```shell
git remote -v
输出如下：
origin	https://github.com/xxx/self (fetch)
origin	https://github.com/xxx/self (push)
```
```shell
git remote add fork https://github.com/base/base.git
再次git remote -v  输出如下：
fork  https://github.com/base/base.git (fetch)
fork  https://github.com/base/base.git (push)
origin	https://github.com/xxx/self (fetch)
origin	https://github.com/xxx/self (push)
```
```shell
git fetch fork
好像还要merge.... pull..
建议本地的代码用主分支来fetch源仓库的修改 （保证这个分支和base相同），
在其他分支中修改，需要同步的时候再从主分支合代码到开发分支
```