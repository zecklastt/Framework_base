import { Box, Button, Card, Center, Checkbox, Input, Radio, Select, Switch, Text, VStack } from "native-base";
import React from "react";

export default function Formulario() {

    const [value, setValue] = React.useState("one");

    return <Center w="100%">
        <Text fontSize="3xl">Formulario</Text>
        <Card w="95%">
            <VStack space="16px" w="100%" mx="auto">
                <Center flexDirection="row">

                    <Input
                        w="50%"
                        placeholder="Nome"
                        margin="1"
                    />

                    <Input
                        w="50%"
                        margin="1"
                        placeholder="Data de Nascimento"
                    />

                </Center>

                <Input
                    placeholder="Senha"
                    type="password"
                />

                <Select placeholder="Escolha um desenvolvedor">
                    <Select.Item label="Zeca" value="Zeca" />
                    <Select.Item label="Gui" value="Gui" />
                    <Select.Item label="Ton" value="Ton" />
                </Select>

            </VStack>
        </Card>
        <Card w="95%">
            <VStack space="16px" w="100%" mx="auto">
                <Center flexDirection="row">

                    <Checkbox.Group w="50%">
                        <Checkbox value="1">
                            Verdadeiro
                        </Checkbox>
                        <Checkbox value="2" defaultIsChecked>
                            Falso
                        </Checkbox>
                    </Checkbox.Group>

                    <Radio.Group w="50%" value={value} onChange={nextValue => { setValue(nextValue) }}>
                        <Radio value="one" my={1}>
                            One
                        </Radio>
                        <Radio value="two" my={1}>
                            Two
                        </Radio>
                    </Radio.Group>
                </Center>
            </VStack>
        </Card>

        <Card w="95%">
            <VStack space="16px" w="100%" mx="auto">
                <Center flexDirection="row">
                    <Switch colorScheme="primary" />
                    <Switch colorScheme="secondary" />
                    <Switch offTrackColor="amber.100" onTrackColor="amber.200" onThumbColor="amber.500" offThumbColor="amber.50" />
                    <Switch offTrackColor="indigo.100" onTrackColor="indigo.200" onThumbColor="indigo.500" offThumbColor="indigo.50" />
                </Center>
            </VStack>
        </Card>

        <Card w="95%">
            <VStack space="16px" w="100%" mx="auto">
                <Center flexDirection="row" justifyContent="space-between">
                    <Button size="sm">PRIMARY</Button>
                    <Button size="sm" colorScheme="secondary">SECONDARY</Button>
                    <Button size="sm" isDisabled>DISABLED</Button>
                </Center>
            </VStack>
        </Card>
    </Center>
}

