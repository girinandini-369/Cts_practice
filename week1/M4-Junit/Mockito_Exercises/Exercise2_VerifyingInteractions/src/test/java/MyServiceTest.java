import static org.mockito.Mockito.*;
import org.junit.jupiter.api.Test;
import org.mockito.Mockito;

class ExternalApi {
    String getData() {
        return "real data";
    }
}

class MyService {
    private final ExternalApi api;

    MyService(ExternalApi api) {
        this.api = api;
    }

    String fetchData() {
        return api.getData();
    }
}

public class MyServiceTest {

    @Test
    public void testVerifyInteraction() {
        // Step 1: Create mock
        ExternalApi mockApi = Mockito.mock(ExternalApi.class);

        // Step 2: Inject mock into service
        MyService service = new MyService(mockApi);

        // Step 3: Call the method
        service.fetchData();

        // Step 4: Verify the interaction happened
        verify(mockApi).getData();
    }
}
