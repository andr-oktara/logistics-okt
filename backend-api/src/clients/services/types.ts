export interface ServiceClient<Client, ConstructorProps> {
  init(props: ConstructorProps): Client;
}
