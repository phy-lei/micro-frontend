import React, { useEffect, useState } from 'react';

function useToolsModule() {
  const [toolsModule, setToolsModuls] = useState();
  useEffect(() => {
    // 导入公共模块 异步promise返回
    System.import('@phy/tools').then(setToolsModuls);
  }, []);
  return toolsModule;
}

export default function About() {
  const toolsModule = useToolsModule();
  console.log(
    '%c [ toolsModule ]',
    'font-size:13px; background:pink; color:#bf2c9f;',
    toolsModule
  );
  if (toolsModule) {
    toolsModule.publicApiFunction('kiana');
  }
  return <div>about</div>;
}
