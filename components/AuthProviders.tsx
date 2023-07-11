"use client"
import { getProviders, signIn } from 'next-auth/react';
import React, { useEffect, useState } from 'react';
import Button from "@/components/Button";

type Provider = {
  id: string;
  name: string;
  type: string;
  signinUrl: string;
  callbackUrl: string;
  signinUrlParams?: Record<string, string> | undefined;
};

type Providers = Record<string, Provider>;

const AuthProviders = ({}) => {
  const [providers, setProviders] = useState<Providers | null>(null);

  useEffect(() => {
    const fetchProviders = async () => {
      const res = await getProviders();
      setProviders(res);
    }
  }, []);

  if(providers) {
    return (
      <div>
        {Object.values(providers).map((provider: Provider, i) => (
          <Button key={i} title='Sign In' handleClick={() => signIn(provider?.id)} />
        ))}
      </div>
    );
  }
};

export default AuthProviders;
// by Rokas with ❤️
