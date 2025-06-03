
import {
    canisterId as actorCanisterId,
    createActor as createActorImpl,
} from '../ui/declarations/backend';

export function createActor(canisterId: any, createActorImpl: any) {
    return createActorImpl(
        canisterId, {
            agentOptions: {
                host: process.env.NEXT_PUBLIC_IC_HOST,
            },
        }
    )
} 

export function makeActor() {
    return createActor(actorCanisterId, createActorImpl);
}