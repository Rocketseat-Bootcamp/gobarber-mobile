import React from 'react';
import Background from '~/components/background';
import logo from '~/assets/logo.png';

import {
  Container,
  Image,
  Form,
  FormInput,
  SubmitButton,
  SignLink,
  SignLinkText,
} from './styles';

export default function SignIn() {
  return (
    <Background>
      <Container>
        <Image source={logo} />
        <Form>
          <FormInput
            icon="mail-outline"
            keyboardType="email-address"
            autoCorrect={false}
            autoCapitalize="none"
            placeholder="Digite seu e-mail"
          />
          <FormInput
            icon="lock-outline"
            secureTextEntry
            placeholder="Digite sua senha"
          />

          <SubmitButton onPress={() => {}}>Acessar</SubmitButton>
          <SignLink onPress={() => {}}>
            <SignLinkText> Criar Conta</SignLinkText>
          </SignLink>
        </Form>
      </Container>
    </Background>
  );
}
