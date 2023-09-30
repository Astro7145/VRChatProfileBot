import { Command } from "../../structures/Command";

export default new Command ({
    name: 'hello',
    description: 'say hello',
    run: async({ interaction }) => {
        interaction.followUp("hello")
    }
})