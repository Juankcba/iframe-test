'use client';
import React,{useState} from 'react'
import { Input } from '@nextui-org/input';
import { Button } from '@nextui-org/button';
import {Card, CardBody} from '@nextui-org/card';

const IframeDinamic = () => {
    const [iframe, setIframe] = useState("");
    const [show, setShow] = useState(false);

  return (

    <div className="w-full">
        <h1 className="text-2xl text-center mb-4 uppercase">Iframe Test</h1>
        <Card className="max-w-md mx-auto">
            <CardBody className="flex justify-between gap-4 items-center">
            <Input placeholder="ingrese el iframe" value={iframe} onChange={e => setIframe(e.target.value)}/>
            <Button fullWidth onPress={() => setShow(true)}>Aplicar</Button>
            <Button color="danger" fullWidth onPress={() => setShow(false)}>Reset</Button>
            </CardBody>
        </Card>
        <div className="w-full mx-auto mt-4 flex justify-center">
        {show && (
            <div dangerouslySetInnerHTML={{
                __html: iframe,
             }}/>
        )}
        </div>
    </div>
  )
}

export default IframeDinamic