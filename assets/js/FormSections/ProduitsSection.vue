<template>
    <!-- Section Produits -->
    <section class="infos-produits">
        <div class="is-flex is-align-items-center">
            <h3 class="mx-4">Produits</h3>
            <input type="checkbox" name="activated" /> <label
                for="activated">Activé</label>
        </div>

        <div class="columns is-multiline">
            <div v-for="product in products" class="column is-one-quarter">
                <div class="field">
                    <div class="control">
                        <input class="input" type="text" v-model="product.name"
                            placeholder="Nom du produit" />
                        <input class="input" type="text" v-model="product.price"
                            placeholder="prix du produit" />
                    </div>
                </div>
            </div>
        </div>
        <div>
            <button type="button" class="button is-info mr-4"
                @click="addProduct">
                Ajouter un produit
            </button>
            <button type="button" class="button is-danger"
                @click="removeProduct">
                Supprimer un produit
            </button>
        </div>
    </section>
    <!-- Fin Section Produits -->
</template>

<script>
export default {
    name: "ProduitsSection",
    props: {
        products: Array,
    },
    methods: {
        addProduct() {
            this.$emit("add-product");
        },
        removeProduct() {
            this.$emit("remove-product");
        },
    },

};
</script>