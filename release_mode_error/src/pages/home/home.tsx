import {useState} from "react";
import {Button, View} from "@tarojs/components";

import {Dialog} from "@taroify/core";

import './home.scss'

export default function Home() {


  let [showPop, setShowPop] = useState(true);

  return (
    <View style={{width: '100%', height: '100%'}}>
      <Dialog
        open={showPop}
        onClose={() => setShowPop(false)}
      >
        <Dialog.Header>错误通知</Dialog.Header>
        <Dialog.Content>手机号错误</Dialog.Content>
        <Dialog.Actions theme='round'>
          <Button
            onClick={() => setShowPop(false)}
          >
            确认
          </Button>
        </Dialog.Actions>
      </Dialog>

    </View>

  )
}








