import AssignmentList from "./AssignmentList.js";
import AssignmentCreate from "./AssignmentCreate.js";

export default {
    components: {
        AssignmentList,
        AssignmentCreate
    },

    template: `
        <section class="flex gap-8">
            <AssignmentList :assignments="filters.inProgress" title="In progress">
                <assignment-create @add="add">
                </assignment-create>
            </AssignmentList> 

            <div v-show="showComplated">
                <AssignmentList
                    :assignments="filters.complated" 
                    title="Complated assignments" can-toggle @toggle="showComplated = !showComplated"
                />
            </div>
        </section>
    `,

    data() {
        return {
            assignments: [],
            showComplated: true
        }
    },
    
    computed: {
        filters() {
            return {
                inProgress: this.assignments.filter(assignment => ! assignment.complete),
                complated: this.assignments.filter(assignment => assignment.complete)
            }
        }
    },

    created() {
        fetch('http://localhost:3000/assignments')
            .then(response => response.json())
            .then(assignments => {
                this.assignments = assignments;
            });
    },
    
    methods: {
        add(name) {
            this.assignments.push({
                name: name,
                complated: false,
                id: this.assignments.length + 1
            });
        }
    }
}